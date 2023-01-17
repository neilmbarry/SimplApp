import React from "react";
import classes from "./SizeModal.module.css";
import FormCheckBox from "../../../addProduct/formComponents/FormCheckBox";
import Button from "../../../../components/UI/Button";

const SizeModal = ({ className, options }) => {
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

export default SizeModal;
