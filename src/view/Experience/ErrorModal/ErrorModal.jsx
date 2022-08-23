import classes from "./ErrorModal.module.css";

import errorSign from "../../../assets/images/errorSign.svg";
import turnOffIcon from "../../../assets/images/turnOffIcon.svg";

export function ErrorModal({ header, message, turnOffFunc }) {
  const turnOff = () => turnOffFunc()

  return (
    <div className={classes.mainDiv}>
      <div className={classes.errorHeader}>
        <div className={classes.errorMain}>
          <img src={errorSign} alt="error" width="20px" height="20px" />
          <p>{header}</p>
        </div>
        <div className={classes.turnOffBtn} onClick={turnOff}>
          <img src={turnOffIcon} alt="X icon" />
        </div>
      </div>
      <div className={classes.errorMessage}>
        <p>{message}</p>
      </div>
    </div>
  );
}
