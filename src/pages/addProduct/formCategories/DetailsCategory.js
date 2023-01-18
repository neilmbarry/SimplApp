import React from "react";
import classes from "./DetailsCategory.module.css";
import FormLabelInput from "../formComponents/FormLabelInput";
import FormDropdown from "../formComponents/FormDropdown";
import FormCheckBox from "../formComponents/FormCheckBox";
import FormTextArea from "../formComponents/FormTextArea";
import Button from "../../../components/UI/Button";

const optionsTemp = [
  "Buttons",
  "Water-proof",
  "Tear-proof",
  "Fire-proof",
  "Collar",
  "Hood",
  "Zipper",
  "Stretchy",
  "Comfortable",
  "Rechargeable",
  "GPS",
  "Wifi-enabled",
  "Heat-proof",
  "GPS tracking",
  "Keyless entry",
  "Recyclable",
  "Adjustable",

  "USB input",
].sort((a, b) => (a[0] > b[0] ? 1 : -1));

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
      {/* <h4>Description</h4> */}
      <FormTextArea
        label="Tell guests what makes your garment unique and why they'll love wearing
        it."
        placeholder="Try to be a detailed as possible."
      />
      {/* <div className={classes.row}>
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
      </div> */}
      <div className={classes.checkBoxes}>
        <h5>Garment features (tick all that apply)</h5>
        <div className={classes.container}>
          {optionsTemp.map((op) => (
            <FormCheckBox option={op} key={op} />
          ))}
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button text="Previous" className={classes.next} onClick={prev} />
        <Button text="Next" className={classes.next} onClick={next} />
      </div>
    </div>
  );
};

export default DetailsCategory;
