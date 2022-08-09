import classes from "./Input.module.css";

import inputSuccsess from '../../assets/images/inputSuccsess.svg'

export function Input({ ...props }) {
  return (
    <div className={classes.inputDiv}>
      <input {...props} />
      <img src={inputSuccsess} alt="succsess" width='20px' height='20px' />
    </div>
  );
}
