import cn from "classnames";

import classes from "./ErrorModal.module.css";

export function ErrorModal({ header, message }) {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.errorHeader}>
        <img src="" alt="error" />
        <p>{header}</p>
        <button><img src="" alt="" /></button>
      </div>
      <div className={classes.errorMessage}>
        <p>{message}</p>
      </div>
    </div>
  );
}
