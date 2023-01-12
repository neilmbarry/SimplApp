import React from "react";
import classes from "./FormTextArea.module.css";

const FormTextArea = ({ className, label, placeholder }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h5>{label}</h5>
      <textarea
        className={classes.input}
        cols="30"
        rows="8"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
