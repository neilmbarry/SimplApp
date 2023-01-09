import React from "react";
import classes from "./Results.module.css";

const Results = ({ className, children, showMap }) => {
  const classesList = `${classes.main} ${className} ${
    !showMap && classes.show
  }`;
  return <div className={classesList}>{children}</div>;
};

export default Results;
