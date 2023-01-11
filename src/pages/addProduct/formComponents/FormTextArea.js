import React from "react";
import classes from "./FormTextArea.module.css";

const FormTextArea = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>FormTextArea</div>;
};

export default FormTextArea;
