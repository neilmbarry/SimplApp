import React from "react";
import classes from "./FormLabelInput.module.css";

const FormLabelInput = ({ className, label, placeholder, parentRef }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h5 className={classes.title}>{label}</h5>
      <input
        type="text"
        className={classes.input}
        placeholder={placeholder}
        ref={parentRef}
      />
    </div>
  );
};

export default FormLabelInput;
