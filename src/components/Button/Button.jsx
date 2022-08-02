import cn from "classnames";

import classes from "./Button.module.css";

export const Button = ({ children, icon, mode, className, ...props }) => {
  return (
    <button
      className={cn(className, classes.button, {
        [classes.primary]: mode === "primary",
        [classes.secondary]: mode === "secondary",
      })}
      {...props}
    >
      <div
        className={
          mode === "primary"
            ? cn(classes.primaryText, classes.buttonText)
            : classes.buttonText
        }
      >
        {children}
      </div>
      {icon && (
        <div
          className={
            mode === "primary"
              ? cn(classes.primaryIcon, classes.buttonIcon)
              : classes.buttonIcon
          }
        >
          {icon}
        </div>
      )}
    </button>
  );
};
