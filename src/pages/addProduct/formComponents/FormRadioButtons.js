import React from "react";
import classes from "./FormRadioButtons.module.css";

const FormRadioButtons = ({ className, options, label, column }) => {
  const classesList = `${classes.main} ${className}`;

  const optionsArray = options.map((op, i) => {
    if (i === 0) {
      return (
        <label className={classes.radio}>
          <input name="radio" type="radio" defaultChecked key={op + i} />
          <span>{op}</span>
        </label>
      );
    }
    return (
      <label className={classes.radio}>
        <input name="radio" type="radio" key={op + i} />
        <span>{op}</span>
      </label>
    );
  });

  return (
    <div className={classes.container}>
      {label && <h5 className={classes.title}>{label}</h5>}
      <form className={classesList}>
        {/* <label className={classes.radio}>
          <input name="radio" type="radio" defaultChecked />
          <span>Awesome</span>
        </label>
        <label className={classes.radio}>
          <input name="radio" type="radio" />
          <span>Cool</span>
        </label> */}
        {optionsArray}
      </form>
    </div>
  );
};

export default FormRadioButtons;
