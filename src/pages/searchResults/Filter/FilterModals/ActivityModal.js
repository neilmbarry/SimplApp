import React from "react";
import classes from "./ActivityModal.module.css";

const ActivityModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>ActivityModal</div>;
};

export default ActivityModal;
