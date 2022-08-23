import { Link } from "react-router-dom";
import { Button } from "../../../components";

import classes from "./Buttons.module.css";

export function Buttons() {
  return (
    <div className={classes.btnDiv}>
      <Link to="/information">
        <Button mode="secondary">Back</Button>
      </Link>
      <Button className={classes.btn2} mode="primary">
        Done
      </Button>
    </div>
  );
}
