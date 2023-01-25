import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../../components/UI/Button";
import configActions from "../../../../store/configSlice";
import queryActions from "../../../../store/querySlice";
import store from "../../../../store/store";
import FormCheckBox from "../../../addProduct/formComponents/FormCheckBox";
import classes from "./TypeModal.module.css";

const TypeModal = ({ className, type }) => {
  const classesList = `${classes.main} ${className}`;
  const checked = useSelector((state) => state.query.value[type]);
  const [selected, setSelected] = useState(checked);
  const options = useSelector((state) => state.config.value[type + "Options"]);
  const optionHandler = (option) => {
    console.log("option handler", option, selected);
    if (selected.includes(option)) {
      return setSelected((prev) => prev.filter((op) => op !== option));
    }
    return setSelected((prev) => [...prev, option]);
  };
  console.log(checked);

  const submitHandler = () => {
    console.log(selected);
    store.dispatch(
      queryActions.updateQuery({
        [type]: selected,
      })
    );

    store.dispatch(configActions.setFilterModal(null));
  };

  const checkBoxes = options.map((op) => {
    return (
      <FormCheckBox
        className={classes.check}
        option={op}
        key={op}
        checked={checked.includes(op)}
        onClick={(option) => optionHandler(option)}
      />
    );
  });
  return (
    <div className={classesList}>
      {checkBoxes}
      <Button text="Apply" alt={true} onClick={submitHandler} />
    </div>
  );
};

export default TypeModal;
