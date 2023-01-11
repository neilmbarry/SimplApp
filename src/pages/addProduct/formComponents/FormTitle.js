import React from "react";
import classes from "./FormTitle.module.css";

const FormTitle = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>FormTitle</div>;
};

export default FormTitle;
