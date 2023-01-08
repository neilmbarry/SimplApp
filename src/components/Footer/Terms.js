import React from "react";
import classes from "./Terms.module.css";

const Terms = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>Terms</div>;
};

export default Terms;
