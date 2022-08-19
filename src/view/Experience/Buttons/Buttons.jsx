import { Link } from "react-router-dom";
import { Button } from "../../../components";

import classes from "./Buttons.module.css";

export function Buttons({ succsess ,onValidCheck}) {
  return (
    <div className={classes.btnDiv}>
      <Link to="/information">
        <Button mode="secondary">Back</Button>
      </Link>
      <Link onClick={onValidCheck} to={succsess ? '/experience' : "" } >
        <Button
          className={classes.btn2}
          mode="primary"
        >
          Done
        </Button>
      </Link>
    </div>
  );
}
