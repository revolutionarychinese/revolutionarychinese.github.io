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
	小资产阶级。如自耕农，手工业主，小知识阶层——学生界、中小学教员、小员司、小事务员、小律师，小商人等都属于这一类。这一个阶级，在人数上，在阶级性上，都值得大大注意。自耕农和手工业主所经营的，都是小生产的经济。这个小资产阶级内的各阶层虽然同处在小资产阶级经济地位，但有三个不同的部分。
	`;
	const trans = `
	The petty bourgeoisie. Included in this category are the owner-peasants, the master handicraftsmen, the lower levels of the intellectuals--students, primary and secondary school teachers, lower government functionaries, office clerks, small lawyers--and the small traders. Both because of its size and class character, this class deserves very close attention. The owner-peasants and the master handicraftsmen are both engaged in small-scale production. Although all strata of this class have the same petty-bourgeois economic status, they fall into three different sections.
	`;
	const regex = new RegExp("[^。?]*" + props.word + "[^。?]*。", "g");
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
	["小资产阶级", "the petty bourgeoisie"],
	["自耕农", "owner-peasant; land-holding peasant"],

	["手工业", "handicraft industry"],
	["手工业主", "master handicraftsmen"],

	["知识", "knowledge; intellectual"],
	["教员", "teacher"],
	["员司", "(dated) lower government functionaries"],
	["事务员", "office clerk"],
	["律师", "lawyer"],
	// ["商人", "small traders"],
	// ["值得", "worth; merit; deserve"],
	// ["经营", "manage; operate; run; engage in"],
	// ["小生产", "small-scale production"],
	// ["处在", "to be situated at"],

	// ["余钱", "spare money"],
	// ["余剩", "left over; surplus"],

	// ["体力", "physical strength"],
	// ["劳动", "work; labour"],
	// ["所得", "gains; earnings; income"],
	// ["自给", "self-sufficient"],




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

	// ["同盟军", "allied forces; allies"],
	// ["敌人", "enemy"],
	// ["群众", "the masses"],

	// ["斗争", "struggle"],
	// ["分辨", "distinguish"],
	// ["经济地位", "economic status"],

	// ["地主阶级", "landlord class"],
	// ["买办阶级", "comprador class"],
	// ["殖民地", "colony"]

	// ["附庸", "dependency; vassal; appendage"],
	// ["附属", "subsidiary; auxiliary"],
	// ["阻碍", "hinder; block; impede"],
	// ["生产关系", "relations of production"],
	// ["生产力", "productive forces"],

	// ["发展", "develop; advance"],
	// ["兼容", "compatible"],
	// ["派", "political faction; school of thought"],

	// ["中产阶级",  "middle bourgeoisie"],
	// ["民族资产阶级", "national bourgeosie"],
	// ["矛盾", "contradiction; inconsistent"],

	// ["外资", "foreign capital"],
	// ["军阀", "warlord"],
	// ["打击", "strike"],
	// ["攻击", "attack"],

	// ["企图", "attempt; try"],
	// ["统治", "rule; dominate"],
	// ["局面", "aspect; phase; situation"],
	// ["势力", "force; power; influence"],
	// ["号召", "call; appeal"],
	// ["集合", "gather; assemble"],
	// ["旗帜", "banner; flag"],
	// ["独立", "independent; stand alone"],
	// ["幻想", "fantasy; illusion"]

];

function Mao(props) {
	const show_words = true;
	const show_context = !show_words;
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
