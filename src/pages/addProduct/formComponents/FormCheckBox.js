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
          onClick={onClick}
          checked
        />
      ) : (
        <input
          type="checkbox"
          id={name}
          className={classes.input}
          ref={parentRef}
          onClick={onClick}
        />
      )}

      <label className={classes.label}>{option}</label>
    </div>
  );
};

export default FormCheckBox;
