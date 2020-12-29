import './words.css';
import 'jquery-csv';

function Word(props) {
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

// ā á ǎ à ō ó ǒ ò ē é ě è ī í ǐ ì ū ú ǔ ù ǖ ǘ ǚ  ǜ  ü

const covid_words = [
	// ["新冠","新冠","xīn guān","novel coronavirus"],
	// ["新冠病毒","新冠病毒", "xīn guān bìng dú", "novel coronavirus"],
	// ["新冠肺炎", "新冠肺炎", "xīn guān fèi yán", "COVID-19"],
	["疫情", "疫情", "yì qíng", "epidemic situation"],
	["抗疫", "抗疫", "kàng yì", "anti-epidemic"],
	["症状", "症狀", "zhèng zhuàng", "symptoms"],
	["无症状", "無症狀", "wú zhèng zhuàng", "no symptoms / asymptomatic"],

	// ["社交距离", "社交距離", "shè jiāo jù lí", "social distancing"],
	// ["封锁", "封鎖", "fēng suǒ", "lockdown"],
	// ["检疫", "檢疫", "jiǎn yì", "quarantine"],
	// ["隔离", "隔離", "gé lí", "isolate"],
];

function Words(props) {
	var all_words = covid_words;
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

export default Words;
