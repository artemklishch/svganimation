import { useState } from "react";
import "./App.css";
import VitaminAnimation from "./components/VitaminIconAnimation";
import DispensingBtn from "./components/DispensingBtn";

function App() {
  const [intensity, setIntensity] = useState(0);
  const onChangeIntensityHandler = () => {
    if (intensity === 3) {
      setIntensity(0);
    } else {
      setIntensity((val) => val + 1);
    }
  };

  const [isDispensing, setIsDespensing] = useState(false);
  const startDisapensBtnHandler = () => {
    setIsDespensing(true);
  };
  return (
    <div className="App">
      <VitaminAnimation
        onClick={onChangeIntensityHandler}
        intensity={intensity}
      />

      <div>
        <DispensingBtn
          isDispensing={isDispensing}
          setIsDespensing={setIsDespensing}
        />
        <button onClick={startDisapensBtnHandler}>Start Dispaense</button>
      </div>
    </div>
  );
}

export default App;
