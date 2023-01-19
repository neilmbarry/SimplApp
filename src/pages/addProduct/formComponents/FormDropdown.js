import React from "react";
import classes from "./FormDropdown.module.css";

const optionsTemp = ["Here", "There", "Everywhere"];

const FormDropdown = ({
  className,
  label = "Placeholder*",
  options = optionsTemp,
  selected,
  parentRef,
}) => {
  const classesList = `${classes.main} ${className}`;
  const selectOptions = options.map((option) => {
    return (
      <option value={option} key={option} className={classes.option}>
        {option}
      </option>
    );
  });
  return (
    <div className={classes.main}>
      <h5 className={classes.title}>{label}</h5>
      <select
        type="text"
        className={`${classes.select} ${className}`}
        ref={parentRef}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default FormDropdown;
