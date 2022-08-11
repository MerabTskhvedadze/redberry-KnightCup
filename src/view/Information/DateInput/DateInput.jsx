import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Dateinput.module.css";

import inputSuccsess from "../../../assets/images/inputSuccsess.svg";

export function DateInput({ succsess, ...props }) {
  return (
    <div className={classes.dateDiv}>
      <DatePicker
        portalId="root-portal"
        popperClassName={classes.popper}
        popperPlacement="top-end"
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        className={classes.datePicker}
        {...props}
      />
      {succsess && <img src={inputSuccsess} alt="arrow" />}
    </div>
  );
}
