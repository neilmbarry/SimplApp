import React from "react";
import classes from "./Results.module.css";

const Results = ({ className, children }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>{children}</div>;
};

export default Results;
