import React, { useRef } from "react";
import classes from "./GarmentCategory.module.css";
import FormLabelInput from "../formComponents/FormLabelInput";
import FormCheckBox from "../formComponents/FormCheckBox";
import FormDropdown from "../formComponents/FormDropdown";
import Button from "../../../components/UI/Button";
import FormRadioButtons from "../formComponents/FormRadioButtons";

const GarmentCategory = ({ className, onPage }) => {
  const classesList = `${classes.main} ${className}`;
  const name = useRef();
  const type = useRef();
  const size = useRef();
  const brand = useRef();
  const activity = useRef();
  const pockets = useRef();

  const next = (e) => {
    const info = {
      name: name.current.value,
      type: type.current.value,
      size: size.current.value,
      brand: brand.current.value,
      activity: activity.current.value,
      pockets: pockets.current.checked,
    };
    console.log(info);
    e.preventDefault();
    onPage(2);
  };

  return (
    <div className={classesList}>
      <FormLabelInput
        label="What is your garment called?*"
        required={true}
        placeholder="e.g. Levi's Blue Jeans"
        parentRef={name}
      />
      <div className={classes.row}>
        <FormDropdown
          label="Clothing Type*"
          options={["Shirt", "Pants", "Dress", "Shoes", "Sports"]}
          parentRef={type}
        />
        <FormDropdown
          label="Size"
          options={["Small", "Medium", "Large"]}
          parentRef={size}
        />
      </div>
      <div className={classes.row}>
        <FormLabelInput
          label="Does your garment have a brand name?"
          placeholder="Adidas, Nike etc."
          parentRef={brand}
        />
        <FormDropdown
          label="Which activity would be best suited?"
          options={["Small", "Medium", "Large"]}
          parentRef={activity}
        />
      </div>
      <FormCheckBox option="This item has pockets!" parentRef={pockets} />
      <Button text="Next" className={classes.next} onClick={next} />
    </div>
  );
};

export default GarmentCategory;
