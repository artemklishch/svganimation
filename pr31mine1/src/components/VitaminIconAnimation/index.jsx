import React from "react";
import { ReactComponent as Icon } from "../../assets/icon.svg";
import classes from "./VitaminIconAnimation.module.scss";

const VitaminAnimation = ({ intensity, onClick }) => {
  const topValue = !intensity
    ? "100%"
    : intensity === 3
    ? "-10px"
    : `calc(100% - (100%/3) * ${intensity})`;
  return (
    <div className={classes.imageBlock}>
      {intensity !== 0 && (
        <span className={classes.imageBlock__intensityValue}>{intensity}</span>
      )}
      <div className={classes.imageBlock__iconBlock} onClick={onClick}>
        <Icon className={classes.imageBlock__iconBlock_icon} />
        <svg
          className={classes.imageBlock__iconBlock_animation}
          style={{ top: topValue }}
        >
          <path className={classes.animationpath}></path>
        </svg>
      </div>
      <p className={classes.imageBlock__label}>Natural Sweetener</p>
    </div>
  );
};

export default VitaminAnimation;
