import './mao.css';
import 'jquery-csv';

function Word(props) {
	const style = "mao";
	const single = props.simplified == props.traditional;
	const length = props.simplified.length;
	const suffix = single ? `single-${length}` : `${length}`;
	return (
		<div class={`container clear-space ${style}`} id="word">
			<p class={`simp simp-margin-${suffix} text-size-${suffix}`}>
				{props.simplified}
			</p>
			{!single ? <p class={`comp comp-margin-${suffix} text-size-${suffix}`}>
				{props.traditional}
			</p> : <div></div>
			}
			<div class={`width-${suffix}`}>
				<p class="pinyin">
					{props.pinyin}
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

// ā á ǎ à ō ó ǒ ò ē é ě è ī í ǐ ì ū ú ǔ ù ǖ ǘ ǚ  ǜ  ü

const mao_words = [
	["党内存在", "黨內存在", "dǎng nèi cún zài", "Within the party"],
	["党内存在", "党内存在", "dǎng nèi cún zài", "Within the party"],
	["毛泽东", "毛澤東", "máo zé dōng", "Mao Zedong"],
	// ["此文", "此文", "cǐ wén", "Essay"],
	["反对", "反對", "fǎn duì", "reject"],
];

function Mao(props) {
	var all_words = mao_words;
	var items = []
	for (const [index, value] of all_words.entries()) {
		const [simp, trad, pinyin, trans] = value
		items.push(
			<Word
				simplified={simp}
				traditional={trad}
				pinyin={pinyin}
				trans={trans}/>
		);
	}
	return (
    	<div>
      		{items}
    	</div>
  	);
}

export default Mao;
