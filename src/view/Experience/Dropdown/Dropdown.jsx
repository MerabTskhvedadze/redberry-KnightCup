import { useState } from "react";

import cn from "classnames";
import classes from "./Dropdown.module.css";

import icon from "../../../assets/images/dropdownIcon.svg";

export function Dropdown({ mode, options, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const onActiveDropdown = () => setIsActive((prevState) => !prevState);

  return (
    <div
      className={
        mode === "remote"
          ? cn(classes.dropdown, classes.remoteDropdown)
          : classes.dropdown
      }
    >
      <div
        className={
          mode === "remote"
            ? cn(classes.remoteBtn, classes.dropdownBtn)
            : classes.dropdownBtn
        }
        onClick={onActiveDropdown}
      >
        {selected}
        <img className={isActive && classes.vector} src={icon} alt="vector" />
      </div>
      {isActive && (
        <div
          className={
            mode === "remote"
              ? cn(classes.dropdownContent, classes.remoteContent)
              : classes.dropdownContent
          }
        >
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
