import classes from "./GetStarted.module.css";
import { BiSkipNextCircle } from "react-icons/bi";
import { Button } from '../../components'

import crown from "../../assets/images/crown.svg";
import landingPhoto from "../../assets/images/landingPhoto.png";

export function GetStarted() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.leftDiv}>
        <div className={classes.headerDiv}>
          <img src={crown} alt="crown" width="18px" height="25px" />
          <h1>Redberry Knight Cup</h1>
        </div>
        <img className={classes.img1} src={landingPhoto} alt="chess" />
      </div>
      <div className={classes.rightDiv}>
        <h1>
          chess says <span>a lot about</span> who we are
        </h1>
        <Button
          mode="primary"
          icon={<BiSkipNextCircle />}
          className={classes.getStartedBtn}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
