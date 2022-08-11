import cn from "classnames";
import classes from "./Input.module.css";

import inputSuccsess from "../../assets/images/inputSuccsess.svg";

export function Input({ succsess, ...props }) {
  return (
    <div
      className={
        succsess
          ? classes.inputDiv
          : cn(classes.inputDiv, classes.inputDivError)
      }
    >
      <input
        className={succsess ? classes.Input : classes.inputError}
        {...props}
      />
      {succsess && (
        <img src={inputSuccsess} alt="succsess" width="20px" height="20px" />
      )}
    </div>
  );
}
