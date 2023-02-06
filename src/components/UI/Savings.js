import React from "react";
import classes from "./Savings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Savings = ({ className, saves }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <FontAwesomeIcon icon={faTag} />
      <p> Save ${saves}</p>
    </div>
  );
};

export default Savings;
