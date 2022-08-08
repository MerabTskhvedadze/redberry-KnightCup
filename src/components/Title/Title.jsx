import cn from "classnames";

import classes from "./Title.module.css";

export const Title = ({ children, className }) => {
  return (
    <div className={classes.titleDiv}>
      <h1 className={cn(classes.title, className)}>{children}</h1>
    </div>
  );
};
