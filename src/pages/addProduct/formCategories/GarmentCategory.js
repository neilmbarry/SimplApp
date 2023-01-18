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
        label="What is your garment called?*"
        placeholder="e.g. Levi's Blue Jeans"
      />
      <div className={classes.row}>
        <FormDropdown
          label="Clothing Type*"
          options={["Shirt", "Pants", "Dress", "Shoes", "Sports"]}
        />
        <FormDropdown label="Size" options={["Small", "Medium", "Large"]} />
      </div>
      <div className={classes.row}>
        <FormLabelInput
          label="Does your garment have a brand name?"
          placeholder="Adidas, Nike etc."
        />
        <FormDropdown
          label="Which activity would be best suited?"
          options={["Small", "Medium", "Large"]}
        />
      </div>
      <FormCheckBox option="This item has pockets!" />
      {/* <Button text="Save VIN" className={classes.button} />
      <FormDropdown />
      <FormRadioButtons options={["here", "there"]} />
      <FormCheckBox
        option="My garment has never been stolen"
        className={classes.lastItem}
      /> */}
      <Button text="Next" className={classes.next} onClick={next} />
    </div>
  );
};

export default GarmentCategory;
