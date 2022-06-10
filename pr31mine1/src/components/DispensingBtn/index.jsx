import React, { useEffect, useRef } from "react";
import { ReactComponent as Bubbles } from "../../assets/bubbles.svg";
import classes from "./DispensingBtn.module.scss";

const TRANSITION_DURATION = 8000;
const FILL_BACGROUND = "grey";

const DispensingBtn = ({ isDispensing, setIsDespensing }) => {
  const liquidAnimatioRef = useRef();
  useEffect(() => {
    if (isDispensing) {
      liquidAnimatioRef.current.style.transition = TRANSITION_DURATION + "ms";
      liquidAnimatioRef.current.children[0].style.fill = FILL_BACGROUND;
      liquidAnimatioRef.current.style.top = "0";
      setTimeout(() => {
        liquidAnimatioRef.current.style.transition = '0s';
        liquidAnimatioRef.current.children[0].style.fill = 'none';
        liquidAnimatioRef.current.style.top = "-110%";
        setIsDespensing(false);
      }, TRANSITION_DURATION);
    }
  }, [isDispensing]);
  return (
    <div className={classes.DispensingBtn}>
      <div className={classes.DispensingBtn__bubblesBlock}>
        <Bubbles className={classes.DispensingBtn__bubblesBlock_bubbles} />
        <Bubbles className={classes.DispensingBtn__bubblesBlock_bubbles} />
      </div>
      <svg className={classes.DispensingBtn__liquid} ref={liquidAnimatioRef}>
        <path className={classes.DispensingBtn__liquid_path} />
      </svg>
      <div className={classes.DispensingBtn__stopBtnBlock}>
        <button className={classes.DispensingBtn__stopBtnBlock_btn}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default DispensingBtn;
