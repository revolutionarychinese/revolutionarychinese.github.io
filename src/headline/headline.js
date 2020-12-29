// import logo from './logo.svg';
import './headline.css';

function SingleComponent(props) {
  return (
    <div className={`container common ${props.type}`}>
      {props.label}
    </div>
  );
}

const villains = [
  "What",
  "Xi Jinping",
  "CCP leadership",
  "Chen Weihua",
  "The PLA",
  "China",
  "Hong Kong Police",
]

const actions = [
  "China Watcher",
  "Deploys drone warfare against",
  "Conducts military exercises near",
  "Deploys naval warships near",
  "Builds re-education camps near",
  "Cracks down on",
  "Imposes import tariffs on",
  "Detains",
]

const victims = [
  "Headline",
  "Joshua Wong",
  "Australian wine",
  "Marsha Blackburn",
  "Hong Kong protesters",
  "Mike Pompeo",
  "Bloomberg journalists",
  "Ethnic minorities",
  "The China-India border",
]

const reasons = [
  "Are You?",
  "The Hong Kong National Security Law",
  "Muslim repression",
  "Xi's 5-year-plan",
  "the Belt and Road initiative",
  "the social credit system",
  "Wolf Warrior diplomacy",
  "Vaccine diplomacy",
  "Debt-trap diplomacy",
  "Intimidation tactics in the South China Sea"
]

function Headline(props) {
  var items = []
  const range= [...Array(villains.length).keys()]
  for (const [index, value] of range.entries()) {
      items.push(
        <div className="flexbox">
          <SingleComponent type="villain" label={villains[index % villains.length]}/>
          {/* <SingleComponent type="action" label={actions[index % actions.length]}/> */}
          {/* <SingleComponent type="victim" label={victims[index % actions.length]}/> */}
          {/* <SingleComponent type="reason" label={reasons[index % reasons.length]}/> */}
        </div>
      );
  }
  return (
    <div>
      {items}
    </div>
  );
}

export default Headline;
