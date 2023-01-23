import React from "react";
import classes from "./Feature.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature = ({ className, feature, icon }) => {
  const classesList = `${classes.main} ${className}`;
  // console.log(icon);
  return (
    <div className={classesList}>
      <FontAwesomeIcon icon={icon} className={classes.icon}></FontAwesomeIcon>
      <h4>{feature}</h4>
    </div>
  );
};

export default Feature;
