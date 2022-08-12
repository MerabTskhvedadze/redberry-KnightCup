import cn from "classnames";
import classes from "./Input.module.css";

import inputSuccsess from "../../assets/images/inputSuccsess.svg";

export function Input({ succsess, inputIsValid, ...props }) {
  return (
    <div
      className={
        inputIsValid
          ? classes.inputDiv
          : cn(classes.inputDiv, classes.inputDivError)
      }
    >
      <input
        className={inputIsValid ? classes.Input : classes.inputError}
        {...props}
      />
      {succsess && (
        <img src={inputSuccsess} alt="succsess" width="20px" height="20px" />
      )}
    </div>
  );
}
