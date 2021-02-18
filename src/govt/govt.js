import './govt.css';
import 'jquery-csv';
import pinyin from 'pinyin';
import opencc from 'node-opencc';

function Govt(props) {
	const style = "classic";
	const single = props.simplified == props.traditional;
	const length = props.simplified.length;
	const suffix = single ? `single-${length}` : `${length}`;
	return (
		<div class={`container clear-space ${style}`} id="word">
			<p class={`simp simp-margin-${suffix} text-size-${suffix}`}>
				{props.simplified}
			</p>
			{!single ? <p class={`comp comp-margin-${suffix} text-size-${suffix}`}>
				<strong>
					{props.traditional}
				</strong>
			</p> : <div></div>
			}
			<div class={`width-${suffix}`}>
				<p class="pinyin">
					<strong>
						{props.pinyin}
					</strong>
				</p>
			</div>
			<div class={`trans trans-margin-${suffix}`}>
				<em>
					{props.trans}
				</em>
			</div>
		</div>
	);
}

function ps(simp) {
	return pinyin(simp).join(" ");
}

function trad(simp) {
	return opencc.simplifiedToTraditional(simp)
}

function Personnel(props) {
	var trad_left = ""
	const show_trad_left = trad(props.left_cn) != props.left_cn
	if (show_trad_left) {
		trad_left = trad(props.left_cn)
	}

	var trad_right = ""
	const show_trad_right = trad(props.right_cn) != props.right_cn
	if (show_trad_right) {
		trad_right = trad(props.right_cn)
	}

	return (
		<div className={`container clear-space personnel`} id="word">
		<table width="100%">
			<tr className="cn">
				<td colspan="2">{props.title_cn}</td>
			</tr>
			<tr className="cn">
				<td colspan="2">{trad(props.title_cn)}</td>
			</tr>
			<tr className="en">
				<td colspan="2">{ps(props.title_cn)}</td>
			</tr>
			<tr className="en">
				<td colspan="2">{props.title_en}</td>
			</tr>

			<tr>
			<td height="120px"/>
			</tr>

			<tr className="cn">
				<td width="50%">{props.left_cn}<br/>{trad_left}</td>
				<td width="50%">{props.right_cn}<br/>{trad_right}</td>
			</tr>
			<tr className="en">
				<td width="50%">{ps(props.left_cn)}</td>
				<td width="50%">{ps(props.right_cn)}</td>
			</tr>
			<tr className="en">
				<td width="50%">{props.left_en}</td>
				<td width="50%">{props.right_en}</td>
			</tr>
		</table>
		</div>
	);
}

function Extras(props) {
	var trad_left = ""
	const show_trad_left = trad(props.left_cn) != props.left_cn
	if (show_trad_left) {
		trad_left = trad(props.left_cn)
	}

	var trad_right = ""
	const show_trad_right = trad(props.right_cn) != props.right_cn
	if (show_trad_right) {
		trad_right = trad(props.right_cn)
	}
	// if props.right_cn ==
	// 	trad_left = "川普"

	return (
		<div className={`container clear-space`} id="word">
		<table width="100%">
			<tr className="cn">
				<td colspan="2">{props.title_cn}</td>
			</tr>
			<tr className="cn">
				<td colspan="2">{trad(props.title_cn)}</td>
			</tr>
			<tr className="en">
				<td colspan="2">{ps(props.title_cn)}</td>
			</tr>
			<tr className="en">
				<td colspan="2">{props.title_en}</td>
			</tr>

			<tr>
			<td height="300px"/>
			</tr>

			<tr className="cn">
				<td width="50%">{props.left_cn}<br/>{trad_left}</td>
				<td width="50%">{props.right_cn}<br/>{trad_right}</td>
			</tr>
			<tr className="en">
				<td width="50%">{ps(props.left_cn)}</td>
				<td width="50%">{ps(props.right_cn)}</td>
			</tr>
			<tr className="en">
				<td width="50%">{props.left_en}</td>
				<td width="50%">{props.right_en}</td>
			</tr>
		</table>
		</div>
	);
}



// ā á ǎ à ō ó ǒ ò ē é ě è ī í ǐ ì ū ú ǔ ù ǖ ǘ ǚ  ǜ  ü

const personnel_words = [
	// {
	// 	title_cn: "党",
	// 	title_en: "party",
	// 	left_cn: "民主党",
	// 	left_en: "Democratic Party",
	// 	right_cn: "共和党",
	// 	right_en: "Republican Party",
	// },
	{
		title_cn: "国会",
		title_en: "Congress",
		right_cn: "参议院",
		right_en: "Senate",
		left_cn: "众议院",
		left_en: "House of Representatives",
	},
	{
		title_cn: "华盛顿",
		title_en: "Washington",
		right_cn: "就职典礼",
		right_en: "inauguration",
		left_cn: "叛乱",
		left_en: "armed rebellion",
	},
	{
		title_cn: "议员",
		title_en: "representative",
		left_cn: "众议院议长",
		left_en: "Speaker of the House",
		right_cn: "参议院多数党领袖",
		right_en: "Senate Majority Leader",
	},
	// {
	// 	title_cn: "总统",
	// 	title_en: "President",
	// 	left_cn: "拜登",
	// 	left_en: "Biden",
	// 	right_cn: "特朗普",
	// 	right_en: "Trump",
	// },
	// {
	// 	title_cn: "副总统",
	// 	title_en: "Vice-President",
	// 	left_cn: "贺锦丽",
	// 	left_en: "Harris",
	// 	right_cn: "彭斯",
	// 	right_en: "Pence",
	// }
]

function Government(props) {
	var items = []
	var blurbs = []
	// for (const [index, value] of all_words.entries()) {
	// 	const [simp, trad, pinyin, trans] = value
	// 	items.push(
	// 		<Govt
	// 			simplified={simp}
	// 			traditional={trad}
	// 			pinyin={pinyin}
	// 			trans={trans}/>
	// 	);
	// }
	for (const [index, value] of personnel_words.entries()) {
		items.push(
			<Personnel {...value}/>
		);
		blurbs.push(
			<div>
			<p>{value.title_cn}{value.title_cn == trad(value.title_cn) ? "": "（" + trad(value.title_cn) + "）"}{value.title_en}</p>
			<p>{value.left_cn}{value.left_cn == trad(value.left_cn) ? "": "（" + trad(value.left_cn) + "）"}{value.left_en}</p>
			<p>{value.right_cn}{value.right_cn == trad(value.right_cn) ? "": "（" + trad(value.right_cn) + "）"}{value.right_en}</p>
			<p>---</p>
			</div>
		)
	}
	return (
    	<div>
			{items}
			{blurbs}
    	</div>
  	);
}

export default Government;
