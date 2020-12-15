// import logo from './logo.svg';
import './headline.css';

const villains = ["1", "2", "3"]

function SingleComponent(props) {
  return (
    <div className={`container common ${props.type}`}>
      {props.label}
    </div>
  );
}

function Headline(props) {
  var items = []
  for (const [index, value] of villains.entries()) {
      items.push(
        <div className="flexbox">
          <SingleComponent type="villain" label={value}/>
          {/* <SingleComponent type="villain" label={value}/> */}
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
