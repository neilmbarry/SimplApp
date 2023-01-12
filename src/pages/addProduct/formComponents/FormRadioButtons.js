import React from "react";
import classes from "./FormRadioButtons.module.css";

const FormRadioButtons = ({ className, options, label = "Placeholder*" }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h5 className={classes.title}>{label}</h5>
      <form className={classes.form}>
        <label className={classes.radio}>
          <input name="radio" type="radio" checked />
          <span>Awesome</span>
        </label>
        <label className={classes.radio}>
          <input name="radio" type="radio" />
          <span>Cool</span>
        </label>
      </form>
    </div>
  );
};

export default FormRadioButtons;
