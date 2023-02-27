import "./App.module.scss";
import classes from "./App.module.scss";
import GreetingText from "./GreetingText";
import { ReactComponent as GreetingTextImg } from "./text.svg";

function App() {
  const onLaunchAnimation = () => {};
  return (
    <div className={classes.App}>
      <GreetingTextImg />
      <GreetingText />
      <button onClick={onLaunchAnimation}>Launch Animation</button>
    </div>
  );
}

export default App;
