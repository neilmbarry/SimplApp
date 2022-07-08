import React from "react";
import classes from "./Button.module.css";

const Button = ({ text, onClick, className }) => {
  const classesList = `${classes.button} ${className}`;
  return (
    <button onClick={onClick} className={classesList}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
