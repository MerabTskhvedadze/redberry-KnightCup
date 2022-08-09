import { useLocation } from "react-router-dom";

// import cn from "classnames";
import classes from "./Stepper.module.css";

import stepperSuccsess from "../../assets/images/stepperSuccsess.svg";

export function Stepper({ succsess }) {
  const location = useLocation();
  const currentPage = location.pathname;
  const checkPage = currentPage === "/information";

  return (
    <>
      <div className={classes.stepper}>
        <div className={classes.stepperSteps}>
          <div className={classes.firstStep}>
            {succsess ? <img src={stepperSuccsess} alt="succsess" /> : <p>1</p>}
          </div>
          <div className={classes.midLine} />
          <div
            className={checkPage ? classes.secondStep1 : classes.secondStep2}
          >
            <p>2</p>
          </div>
        </div>
      </div>
      <div className={classes.stepperTitles}>
        <p>Personal information</p>
        <p>Chess experience</p>
      </div>
    </>
  );
}
