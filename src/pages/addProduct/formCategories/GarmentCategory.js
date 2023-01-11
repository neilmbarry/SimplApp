import React from "react";
import classes from "./GarmentCategory.module.css";
import FormLabelInput from "../formComponents/FormLabelInput";
import FormCheckBox from "../formComponents/FormCheckBox";
import FormDropdown from "../formComponents/FormDropdown";
import Button from "../../../components/UI/Button";
import FormRadioButtons from "../formComponents/FormRadioButtons";

const GarmentCategory = ({ className, onNext }) => {
  const classesList = `${classes.main} ${className}`;
  const next = (e) => {
    e.preventDefault();
    onNext();
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
      <FormCheckBox option="My model number is 1981 or later" />
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
