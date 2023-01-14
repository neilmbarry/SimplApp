import React from "react";
import classes from "./GarmentCategory.module.css";
import FormLabelInput from "../formComponents/FormLabelInput";
import FormCheckBox from "../formComponents/FormCheckBox";
import FormDropdown from "../formComponents/FormDropdown";
import Button from "../../../components/UI/Button";
import FormRadioButtons from "../formComponents/FormRadioButtons";

const GarmentCategory = ({ className, onPage }) => {
  const classesList = `${classes.main} ${className}`;
  const next = (e) => {
    e.preventDefault();
    onPage(2);
  };

  return (
    <div className={classesList}>
      <FormLabelInput
        label="Where is your garment located?"
        placeholder="Enter address"
      />

      <FormLabelInput
        label="What type of clothing?*"
        placeholder="Shirt, Pants, Hat etc."
        className={classes.short}
      />
      <FormCheckBox option="I purchased this item new" />
      <Button text="Save VIN" className={classes.button} />
      <FormDropdown />
      <FormRadioButtons />
      <FormCheckBox
        option="My garment has never been stolen"
        className={classes.lastItem}
      />
      <Button text="Next" className={classes.next} onClick={next} />
    </div>
  );
};

export default GarmentCategory;
