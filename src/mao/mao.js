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

// ā á ǎ à ō ó ǒ ò ē é ě è ī í ǐ ì ū ú ǔ ù ǖ ǘ ǚ  ǜ  ü

const mao_words = [
	["毛泽东", "Mao Zedong"],
	["分析", "analysis"],
    ["寻找", "seek"],
	["倾向", "tendency"],
	["左倾", "left (politics)"],
	["右倾", "right (politics)"],
	// ["机会主义", "opportunism"],
	// ["农民", "farmer"],
	// ["党内存在", "黨內存在", "dǎng nèi cún zài", "Within the party"],
	// ["此文", "此文", "cǐ wén", "Essay"],
	// ["反对", "反對", "fǎn duì", "reject"],
];

function Mao(props) {
	var all_words = mao_words;
	var items = []
	var blurbs = []
	for (const [index, value] of all_words.entries()) {
		const [simp, trans] = value
		const pinyin_str = pinyin(simp).join(" ")
		const trad_str = opencc.simplifiedToTraditional(simp);
		items.push(
			<Word
				key={"word" + index}
				simplified={simp}
				traditional={trad_str}
				pinyin={pinyin_str}
				trans={trans}/>
		);
		blurbs.push(
			<p key={"blurb" + index}>{simp + "（" + trad_str + "）" + trans}</p>
		);
	}
	return (
    	<div>
      		{items}
			{blurbs}
    	</div>
  	);
}

export default Mao;
