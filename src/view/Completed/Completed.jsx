import { useEffect } from "react";

import { LeftContent } from "components";

import classes from "./Completed.module.css";

import completed from "../../assets/images/completed.png";
import completedRckt from "../../assets/images/completedRckt.svg";

export function Completed() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace("/");
      localStorage.clear()
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.mainDiv}>
      <LeftContent imgScr={completed} />
      <div className={classes.rocket}>
        <img src={completedRckt} alt="rocket" />
      </div>
    </div>
  );
}
