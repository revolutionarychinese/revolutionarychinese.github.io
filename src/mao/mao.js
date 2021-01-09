import './mao.css';
import 'jquery-csv';
import pinyin from 'pinyin';
import opencc from 'node-opencc';

function Word(props) {
	const style = "mao";
	const single = props.simplified === props.traditional;
	const length = props.simplified.length;
	const suffix = single ? `single-${length}` : `${length}`;
	return (
		<div className={`container clear-space ${style}`} id={props.simplified}>
			<p className={`simp simp-margin-${suffix} text-size-${suffix}`}>
				{props.simplified}
			</p>
			{!single ? <p className={`comp comp-margin-${suffix} text-size-${suffix}`}>
				{props.traditional}
			</p> : <div></div>
			}
			<div className={`width-${suffix}`}>
				<p className="pinyin">
					{props.pinyin}
				</p>
			</div>
			<div className={`trans trans-margin-${suffix}`}>
				<em>
					{props.trans}
				</em>
			</div>
		</div>
	);
}

function replace_nth(string, regex, trans, n) {
   var i = 0;
   return string.replace(regex, function(match) {
        i+=1;
        if(i===n) return `<mark>${match}</mark>`;
        return match;
    });
}

function Context(props) {
	const title_cn = "中国社会各阶级的分析"
	const title_en = "Analysis of the classes in Chinese society"

	const paragraph = `
	谁是我们的敌人？谁是我们的朋友？这个问题是革命的首要问题。中国过去一切革命斗争成效甚少，其基本原因就是因为不能团结真正的朋友，以攻击真正的敌人。革命党是群众的向导，在革命中未有革命党领错了路而革命不失败的。我们的革命要有不领错路和一定成功的把握，不可不注意团结我们的真正的朋友，以攻击我们的真正的敌人。我们要分辨真正的敌友，不可不将中国社会各阶级的经济地位及其对于革命的态度，作一个大概的分析。
	`;
	const trans = `
	A revolutionary party is the guide of the masses, and no revolution ever succeeds when the revolutionary party leads them astray.
	`;
	const regex = new RegExp("[^。]*" + props.word + "[^。]*。", "g");
	// search = search.replace([^.]* flung [^.]*\., '\\$&');
	// var re = new RegExp([^.?!]*(?<=[.?\s!])flung(?=[\s.?!])[^.?!]*[.?!], 'g');
	var headers = `<h1>${title_cn}</h1><h2>${title_en}</h2>`
	// var headers = ""
	var paragraph_marked = replace_nth(paragraph, regex, trans, 1);
	// props.paragraph.replace(regex, `<mark>$&</mark>`);
	var paragraph_trans = `<br><br><p class="english">${trans}</p>`

	const style = "mao";
	return (
		<div className={`container context ${style}`} id={props.simplified}>
			<div className={`chinese`} dangerouslySetInnerHTML={{__html: headers+paragraph_marked+paragraph_trans}}/>
		</div>
	);
}

// ā á ǎ à ō ó ǒ ò ē é ě è ī í ǐ ì ū ú ǔ ù ǖ ǘ ǚ  ǜ  ü

const mao_words = [
	// ["毛泽东", "Mao Zedong"],
	// ["分析", "analysis"],
    // ["寻找", "seek"],

	// ["倾向", "political inclination; deviation"],
	// ["左倾", "left-leaning"],
	// ["右倾", "right-leaning"],

	// ["机会主义", "opportunism"],
	// ["工人", "worker"],
	// ["工人运动", "labor movement"],
	// ["农民", "farmer; peasant"],

	["同盟军", "allied forces; allies"],
	["敌人", "enemy"],
	["群众", "the masses"],

	// ["斗争", "struggle"],
	// ["分辨", "distinguish"],
	// ["经济地位", "economic status"],

	// ["地主阶级", "landlord class"],
	// ["买办阶级", "comprador class"],
	// ["附庸", "vassal"],
];

function Mao(props) {
	const show_words = false;
	const show_context = true;
	var all_words = mao_words;
	var words = [];
	var contexts = [];
	var blurbs = [];
	for (const [index, value] of all_words.entries()) {
		const [simp, trans] = value
		const pinyin_str = pinyin(simp).join(" ")
		const trad_str = opencc.simplifiedToTraditional(simp);
		if (show_words) {
			words.push(
				<Word
					key={"word" + index}
					simplified={simp}
					traditional={trad_str}
					pinyin={pinyin_str}
					trans={trans}/>
			);
		}
		if (show_context) {
			contexts.push(<Context word={simp}/>)
		}
		const trad_part = trad_str === simp ? " " : "（" + trad_str + "）"
		blurbs.push(
			<p key={"blurb" + index}>{simp + trad_part + trans}</p>
		);
	}
	blurbs.reverse()
	return (
    	<div>
      		{words}
			{contexts}
			{blurbs}
    	</div>
  	);
}

export default Mao;
