import React from "react";
import classes from "./FormCheckBox.module.css";

const FormCheckBox = ({
  className,
  option = "My model number is 1981 or later",
}) => {
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
      <label for="todo" data-content="Get out of bed" className={classes.label}>
        {option}
      </label>
    </div>
  );
};

export default FormCheckBox;
