import { Link } from "react-router-dom";
import { Button } from "../../../components";

import classes from "./Buttons.module.css";
import btnVector from "../../../assets/images/btnVector.svg";

export function Buttons({ succsess }) {
  return (
    <div className={classes.btnDiv}>
      <Link to="/">
        <Button mode="secondary">Back</Button>
      </Link>
      <Link to={succsess ? '/experience' : "" } >
        <Button
          className={classes.btn2}
          mode="primary"
          icon={<img src={btnVector} alt="vector" />}
        >
          Next
        </Button>
      </Link>
    </div>
  );
}
