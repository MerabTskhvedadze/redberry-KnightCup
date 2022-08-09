import cn from "classnames";

import classes from "./PageTitle.module.css";

export const PageTitle = ({ children, className }) => {
  return (
    <div className={classes.titleDiv}>
      <h1 className={cn(classes.title, className)}>{children}</h1>
    </div>
  );
};
