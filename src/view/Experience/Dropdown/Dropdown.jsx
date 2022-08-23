import { useState } from "react";

import cn from "classnames";
import classes from "./Dropdown.module.css";

import icon from "../../../assets/images/dropdownIcon.svg";

export function Dropdown({
  mode,
  options,
  remoteData,
  error,
  selected,
  setSelected,
  prevState,
}) {
  const [isActive, setIsActive] = useState(false);
  const onActiveDropdown = () => setIsActive((prevState) => !prevState);

  let uniqueKey1 = 0;
  let uniqueKey2 = 0;

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdownBtn} onClick={onActiveDropdown}>
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
          {mode !== "remote"
            ? options.map((options) => (
                <div
                  key={uniqueKey1++}
                  className={classes.dropdownItem}
                  onClick={(e) => {
                    setSelected({
                      ...prevState,
                      knowledgeLevel: e.target.textContent,
                    });
                    setIsActive(false);
                  }}
                >
                  {options}
                </div>
              ))
            : error === null ? remoteData.map(({ name }) => (
                <div
                  key={uniqueKey2++}
                  className={cn(classes.dropdownItem, classes.remoteItem)}
                  onClick={(e) => {
                    setSelected({
                      ...prevState,
                      character: e.target.textContent,
                    });
                    setIsActive(false);
                  }}
                >
                  {name}
                </div>
              )) : <div className={classes.error} >{error}</div>}
        </div>
      )}
    </div>
  );
}
