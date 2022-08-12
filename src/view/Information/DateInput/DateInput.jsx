import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Dateinput.module.css";

import inputSuccsess from "../../../assets/images/inputSuccsess.svg";
import cn from "classnames";

export function DateInput({ succsess, inputIsValid, ...props }) {
  return (
    <div
      className={
        inputIsValid ? classes.dateDiv : cn(classes.dateDiv, classes.dateDivError)
      }
    >
      <DatePicker
        className={inputIsValid ? classes.datePicker : classes.datePickerError}
        popperClassName={classes.popper}
        popperPlacement="top-end"
        portalId="root-portal"
        dropdownMode="select"
        showMonthDropdown
        showYearDropdown
        dateFormat="dd/MM/yyyy"
        {...props}
      />
      {succsess && <img src={inputSuccsess} alt="arrow" />}
    </div>
  );
}
