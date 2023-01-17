import React from "react";
import classes from "./FilterButton.module.css";

const FilterButton = ({ className, onClick, text, children, showOptions }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <button onClick={onClick} className={classes.button}>
        {text}
      </button>
      {showOptions && <div className={classes.child}>{children}</div>}
    </div>
  );
};

export default FilterButton;
