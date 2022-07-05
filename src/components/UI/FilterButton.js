import React from "react";
import classes from "./FilterButton.module.css";

const FilterButton = ({ className, onClick, text, children }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <button onClick={onClick} className={classesList}>
      {children && <div className={classes.child}>{children}</div>}
      {text}
    </button>
  );
};

export default FilterButton;
