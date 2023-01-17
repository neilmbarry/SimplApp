import React from "react";
import classes from "./FullBackdrop.module.css";
import ReactDOM from "react-dom";

const FullBackdrop = ({ className, onClick }) => {
  const classesList = `${classes.main} ${className}`;
  return ReactDOM.createPortal(
    <div className={classesList} onClick={onClick}></div>,
    document.getElementById("portal")
  );
};

export default FullBackdrop;
