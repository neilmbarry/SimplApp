import React from "react";
import classes from "./HostComponent.module.css";

const HostComponent = ({ className, title, children }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h5 className={classes.title}>{title}</h5>
      {children}
    </div>
  );
};

export default HostComponent;
