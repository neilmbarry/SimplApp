import React from "react";
import Button from "../../../../components/UI/Button";
import FormRadioButtons from "../../../addProduct/formComponents/FormRadioButtons";
import classes from "./SortModal.module.css";

const options = [
  "Price: low to high",
  "Price: high to low",
  "Rating: low to high",
  "Rating: high to low",
];

const SortModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <FormRadioButtons
        options={options}
        className={classes.radio}
        column={true}
      />
      <Button text="Apply" alt={true} />
    </div>
  );
};

export default SortModal;
