import classes from "./Loading.module.css";

export function Loadind() {
  return (
    <div className={classes.main}>
      <div className={classes.loader} />
      <h1>Loading</h1>
    </div>
  );
}
