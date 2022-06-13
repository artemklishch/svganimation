import React, { useEffect, useRef } from "react";
import { ReactComponent as Bubbles } from "../../assets/bubbles.svg";
import { ReactComponent as WaterDrop } from "../../assets/water_drop.svg";
import classes from "./DispensingBtn.module.scss";

const TRANSITION_DURATION = 8000;
const LIQUID_BACGROUND = "red";

const DispensingBtn = ({ isDispensing, setIsDespensing }) => {
  const liquidAnimatioRef = useRef();
  useEffect(() => {
    if (isDispensing) {
      liquidAnimatioRef.current.style.transition = TRANSITION_DURATION + "ms";
      liquidAnimatioRef.current.style.top = "0";
      setTimeout(() => {
        liquidAnimatioRef.current.style.transition = "0s";
        liquidAnimatioRef.current.style.top = "-110%";
        setIsDespensing(false);
      }, TRANSITION_DURATION);
    }
  }, [isDispensing, setIsDespensing]);
  return (
    <div
      className={classes.DispensingBtn}
      style={{ backgroundColor: LIQUID_BACGROUND }}
    >
      <div className={classes.DispensingBtn__bubblesBlock}>
        <Bubbles className={classes.DispensingBtn__bubblesBlock_bubbles} />
        <Bubbles className={classes.DispensingBtn__bubblesBlock_bubbles} />
      </div>
      <svg className={classes.DispensingBtn__liquid} ref={liquidAnimatioRef}>
        <path className={classes.DispensingBtn__liquid_path} />
      </svg>
      <WaterDrop className={classes.DispensingBtn__dropicon} />
      <h3 className={classes.DispensingBtn__title}>
        Lemon mint - breezer
      </h3>
      <div className={classes.DispensingBtn__stopBtnBlock}>
        <button className={classes.DispensingBtn__stopBtnBlock_btn}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default DispensingBtn;
