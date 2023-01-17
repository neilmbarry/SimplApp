import React from "react";
import classes from "./Button.module.css";

const Button = ({ text, onClick, className, alt }) => {
  const classesList = `${classes.button} ${className} ${alt && classes.alt}`;
  return (
    <button onClick={onClick} className={classesList}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
