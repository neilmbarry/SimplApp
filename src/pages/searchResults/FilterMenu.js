import React from "react";
import classes from "./FilterMenu.module.css";

const FilterMenu = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h3>Filters</h3>
    </div>
  );
};

export default FilterMenu;
