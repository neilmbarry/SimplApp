import React, { useRef, useState } from "react";
import classes from "./DetailsCategory.module.css";
import FormLabelInput from "../formComponents/FormLabelInput";
import FormDropdown from "../formComponents/FormDropdown";
import FormCheckBox from "../formComponents/FormCheckBox";
import FormTextArea from "../formComponents/FormTextArea";
import Button from "../../../components/UI/Button";
import store from "../../../store/store";
import newProductActions from "../../../store/newProductSlice";

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

  const [checkedList, setCheckedList] = useState([]);

  const checkHandler = (option) => {
    if (checkedList.includes(option)) {
      return setCheckedList((prev) => prev.filter((op) => op !== option));
    }
    return setCheckedList((prev) => [...prev, option]);
  };

  const description = useRef();

  const next = (e) => {
    e.preventDefault();
    const details = {
      description: description.current.value,
      features: checkedList,
    };

    store.dispatch(newProductActions.updateInfo(details));
    onPage(3);
  };
  const prev = (e) => {
    e.preventDefault();
    onPage(1);
  };
  return (
    <div className={classesList}>
      <FormTextArea
        label="Tell guests what makes your garment unique and why they'll love wearing
        it."
        placeholder="Try to be a detailed as possible."
        parentRef={description}
      />

      <div className={classes.checkBoxes}>
        <h5>Garment features (tick all that apply)</h5>
        <div className={classes.container}>
          {optionsTemp.map((op) => (
            <FormCheckBox
              option={op}
              key={op}
              name={op}
              checked={checkedList.includes(op)}
              onClick={() => checkHandler(op)}
            />
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
