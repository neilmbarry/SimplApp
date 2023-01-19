import React from "react";
import classes from "./FormTextArea.module.css";

const FormTextArea = ({ className, label, placeholder, parentRef }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h5>{label}</h5>
      <textarea
        className={classes.input}
        cols="30"
        rows="8"
        placeholder={placeholder}
        ref={parentRef}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
