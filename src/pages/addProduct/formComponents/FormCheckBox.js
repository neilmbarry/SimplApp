import React from "react";
import classes from "./FormCheckBox.module.css";

const FormCheckBox = ({ className, option = "Placeholder" }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <input
        type="checkbox"
        id="todo"
        name="todo"
        value="todo"
        className={classes.input}
      />
      <label className={classes.label}>{option}</label>
    </div>
  );
};

export default FormCheckBox;
