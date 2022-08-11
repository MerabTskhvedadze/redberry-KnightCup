import cn from "classnames";

import classes from "./LeftContent.module.css";
import crown from "../../assets/images/crown.svg";

export function LeftContent({ className, children, imgScr }) {
  return (
    <div className={cn(classes.leftDiv, className)}>
      <div className={classes.headerDiv}>
        <img src={crown} alt="crown" width="18px" height="25px" />
        <h1>Redberry Knight Cup</h1>
      </div>
      <img
        className={classes.img1}
        src={imgScr}
        alt="chess"
        width="100%"
        height="66%"
      />
      {children}
    </div>
  );
}
