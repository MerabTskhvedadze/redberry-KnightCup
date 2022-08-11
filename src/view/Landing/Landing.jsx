import { Link } from "react-router-dom";
import { Button, LeftContent } from "../../components";

import classes from "./Landing.module.css";

import btnVector from '../../assets/images/btnVector.svg'
import landingPhoto from "../../assets/images/landingPhoto.png";

export function Landing() {
  return (
    <div className={classes.mainDiv}>
      <LeftContent imgScr={landingPhoto} />
      <div className={classes.rightDiv}>
        <h1>
          chess says <span>a lot about</span> who we are
        </h1>
        <Link to={'/information'}>
          <Button
            mode="primary"
            icon={<img src={btnVector} alt="next vector" />}
            className={classes.getStartedBtn}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
