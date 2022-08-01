import classes from './GetStarted.module.css'

export function GetStarted() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.leftDiv}>
        <h1>Redberry Knight Cup</h1>
        <h2>left div content</h2>
      </div>
      <div className={classes.rightDiv}>
        <h1>right div</h1>
      </div>
    </div>
  )
}