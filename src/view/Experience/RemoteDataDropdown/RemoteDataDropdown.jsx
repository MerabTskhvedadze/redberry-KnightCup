import { useState } from "react";

import icon from '../../../assets/images/dropdownIcon.svg'
import classes from "./RemoteDataDropdown.module.css";

export function RemoteDataDropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const onActiveDropdown = () => setIsActive((prevState) => !prevState);

  const options = ["Beginner", "Intermediate", "Professional"];

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdownBtn} onClick={onActiveDropdown}>
        {selected}
        <img className={isActive && classes.vector} src={icon} alt="vector" />
      </div>
      {isActive && (
        <div className={classes.dropdownContent}>
          {options.map((options) => (
            <div
              className={classes.dropdownItem}
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}
            >
              {options}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
