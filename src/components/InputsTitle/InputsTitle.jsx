import classes from "./InputsTitle.module.css";

export function InputsTitle({ title, subTitle }) {
  return (
    <div className={classes.headers}>
      <p className={classes.title}>{title}</p>
      <p className={classes.subTitle}>{subTitle}</p>
    </div>
  );
}
