import React from "react";
import classes from "./DetailsCategory.module.css";
import FormLabelInput from "../formComponents/FormLabelInput";
import FormDropdown from "../formComponents/FormDropdown";
import FormCheckBox from "../formComponents/FormCheckBox";
import FormTextArea from "../formComponents/FormTextArea";
import Button from "../../../components/UI/Button";

const optionsTemp = [
  "All-wheel drive",
  "Android Auto",
  "Apple Car Play",
  "AUX input",
  "Backup camera",
  "Bike rack",
  "Blind spot warning",
  "Bluetooth",
  "Child Seat",
  "Convertible",
  "GPS",
  "Heated Seats",
  "Keyless entry",
  "Pet Friendly",
  "Ski rack",
  "Snow tires or chains",
  "Sunroof",
  "Toll pass",
  "USB charger",
  "USB input",
  "Wheelchair",
];

const DetailsCategory = ({ className, onPage }) => {
  const classesList = `${classes.main} ${className}`;
  const next = (e) => {
    e.preventDefault();
    onPage(3);
  };
  const prev = (e) => {
    e.preventDefault();
    onPage(1);
  };
  return (
    <div className={classesList}>
      <div className={classes.row}>
        <FormLabelInput label="Brand name" placeholder="Nike, Adidas etc." />
        <FormLabelInput
          label="Garment name"
          placeholder="Trouser snakes etc."
        />
      </div>
      <div className={classes.row}>
        <FormDropdown
          label="Garment color"
          options={["Red", "Orange", "Yellow", "Green", "Blue"]}
        />
        <FormDropdown
          label="Garment size"
          options={["Medium", "Small", "Large"]}
        />
        <FormDropdown
          label="Garment material"
          options={["Leather", "Suede", "Cotton", "Polyester", "Spandex"]}
        />
      </div>
      <div className={classes.checkBoxes}>
        <h5>Garment features</h5>
        <div className={classes.container}>
          {optionsTemp.map((op) => (
            <FormCheckBox option={op} key={op} />
          ))}
        </div>
      </div>
      <h4>Description</h4>
      <FormTextArea
        label="Tell guests what makes your garment unique and why they'll love wearing
        it."
        placeholder="Try to be a detailed as possible."
      />
      <div className={classes.buttonContainer}>
        <Button text="Previous" className={classes.next} onClick={prev} />
        <Button text="Next" className={classes.next} onClick={next} />
      </div>
    </div>
  );
};

export default DetailsCategory;
