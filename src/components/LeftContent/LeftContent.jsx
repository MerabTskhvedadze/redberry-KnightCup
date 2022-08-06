import cn from "classnames";

import classes from "./LeftContent.module.css";
import crown from "../../assets/images/crown.svg";

export function LeftContent({ className, children}) {
  return (
    <div className={cn(classes.leftDiv, className)}>
      <div className={classes.headerDiv}>
        <img src={crown} alt="crown" width="18px" height="25px" />
        <h1>Redberry Knight Cup</h1>
      </div>
      {children}
    </div>
  );
}
