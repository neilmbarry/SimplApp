import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = ({ className, icon, text }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <h4 className={classes.text}>{text}</h4>
    </div>
  );
};

export default MenuItem;
