import './countdown.css';
import 'jquery-csv';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';
import img14 from './assets/14.png';
import img15 from './assets/15.png';
import img16 from './assets/16.png';
import img17 from './assets/17.png';
import img18 from './assets/18.png';
import img19 from './assets/19.png';
import img20 from './assets/20.png';

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
]

function Word(props) {
	const style = "countdown";
	const length = 4;
	const suffix = `${length}`;
    const image_url = `${props.idx}.png`;
    const image = images[props.idx];
    const chinese_str = props.simp == props.trad ? `${props.simp}` : `${props.simp}/${props.trad}`;
	return (
		<div
            class={`container clear-space ${style}`}
            id="word"
            style={{ backgroundImage: `url(${image})`}}
            >
			<div class={`simp simp-margin-${suffix} text-size-${suffix}`}>
				{props.trans_top}
			</div>
            <div class="flexbox">
                <div>
                    {props.simp}
                </div>
                <div>
                    {props.pinyin}
                </div>
            </div>
			<div class={`trans trans-margin-${suffix}`}>
				<em>
					{props.trans_bottom}
				</em>
			</div>
		</div>
	);
}

// ā á ǎ à ō ó ǒ ò è é è ě ī í ǐ ì ū ú ǔ ù ǖ ǘ ǚ  ǜ  ü

const countdown_words = [
	["新冠肺炎", "新冠肺炎", "xīn guān fèi yán", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["武汉加油", "武漢加油", "wǔ hàn jiā yóu", "Stay strong Wuhan!", "During the spring festival of 2020, Stay strong Wuhan was all of China's shared wish"],
	["居家抗疫", "居家抗疫", "jū jiā kàng yì", "Stay home, fight the epidemic", "To fight the epidemic, going out less and avoiding gatherings becomes the new normal"],
	["戴口罩", "戴口罩", "dài kǒu zhào", "Wear a mask", "We wear a mask to protect ourselves and to protect others"],
	["人民至上，生活至上", "人民至上，生活至上", "rén mín zhì shàng, shēng huó zhì shàng", "People first, lives first", "Protect lives and health at all costs"],

	["人类卫生健康共同体", "人類衛生健康共同體", "rén lèi wèi shēng jiàn kāng gòng tóng tǐ", "COVID-19", "ddd"],
	["上网，云毕业", "上網，雲畢業", "shàng wǎng kè, yún bìyè", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["天向一号", "天向一號", "tiān xiàng yī hào", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["珠峰测高", "珠峰測高", "zhū fēng cè gāo", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["民法典", "民法典", "mín fǎ diǎn", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],

	["港区国安法", "港區國安法", "gǎng qū guó ān fǎ", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["北斗开通", "北斗開通", "běi dǒu kāi tōng", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["直播带货", "直播帶貨", "zhí bò dài huò", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["表彰大会", "表彰大會", "biǎo zhāng dà huì", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["深圳特区40年", "深圳特區40年", "shēn zhèn tè qū 40 nián", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],

	["抗美援朝70周年", "抗美援朝70週年", "kàng měi yuán cháo 70 zhōu nián", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
    ["奋斗者号", "奮鬥者號", "fèn dòu zhě hào", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["浦东开发开放30年", "浦東開發開放30年", "pǔ dōng kāi fā kāi fàng 30 nián", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["脱贫攻坚", "脫貧攻堅", "tuō pín gōng jiān", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
	["嫦娥五号", "嫦娥五號", "cháng'é wǔ hào", "COVID-19", "The novel coronavirus spreads across the globe, impacting countless lives"],
];

function Countdown(props) {
	var all_words = countdown_words;
	var items = []
    const range20 = [...Array(20).keys()]
	for (const i of range20) {
		const [simp, trad, pinyin, trans_top, trans_bottom] = all_words[i%20]
		items.push(
			<Word
                idx={i}
				simp={simp}
				trad={trad}
                trans_bottom={trans_bottom}
				pinyin={pinyin}
				trans_top={trans_top}/>
		);
	}
	return (
    	<div>
      		{items}
    	</div>
  	);
}

export default Countdown;
