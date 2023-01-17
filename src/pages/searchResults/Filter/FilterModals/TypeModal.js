import React from "react";
import Button from "../../../../components/UI/Button";
import FormCheckBox from "../../../addProduct/formComponents/FormCheckBox";
import classes from "./TypeModal.module.css";

const TypeModal = ({ className, options }) => {
  const classesList = `${classes.main} ${className}`;
  const checkBoxes = options.map((op) => {
    return <FormCheckBox className={classes.check} option={op} key={op} />;
  });
  return (
    <div className={classesList}>
      {checkBoxes}
      <Button text="Apply" alt={true} />
    </div>
  );
};

export default TypeModal;
