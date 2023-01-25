import React from "react";
import classes from "./FormCheckBox.module.css";

const FormCheckBox = ({
  className,
  option = "Placeholder",
  parentRef,
  name,
  onClick,
  checked,
}) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      {checked ? (
        <input
          type="checkbox"
          id={name}
          className={classes.input}
          ref={parentRef}
          onChange={() => onClick(option)}
          defaultChecked
        />
      ) : (
        <input
          type="checkbox"
          id={name}
          className={classes.input}
          ref={parentRef}
          onChange={() => onClick(option)}
        />
      )}

      <label className={classes.label}>{option}</label>
    </div>
  );
};

export default FormCheckBox;
