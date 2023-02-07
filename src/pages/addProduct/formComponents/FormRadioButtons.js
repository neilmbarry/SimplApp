import React from "react";
import classes from "./FormRadioButtons.module.css";

const FormRadioButtons = ({
  className,
  options,
  label,
  selected,
  onSelect,
}) => {
  const classesList = `${classes.main} ${className}`;

  const optionsArray = options.map((op, i) => {
    if (op.option === selected) {
      return (
        <label
          className={classes.radio}
          key={op.label + i}
          onClick={() => onSelect(op.option)}
        >
          <input name="radio" type="radio" defaultChecked />
          <span>{op.label}</span>
        </label>
      );
    }
    return (
      <label
        className={classes.radio}
        key={op.label + i}
        onClick={() => onSelect(op.option)}
      >
        <input name="radio" type="radio" />
        <span>{op.label}</span>
      </label>
    );
  });

  return (
    <div className={classes.container}>
      {label && <h4 className={classes.title}>{label}</h4>}
      <form className={classesList}>{optionsArray}</form>
    </div>
  );
};

export default FormRadioButtons;
