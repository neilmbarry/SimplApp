import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../../components/UI/Button";
import configActions from "../../../../store/configSlice";
import queryActions from "../../../../store/querySlice";
import store from "../../../../store/store";
import FormRadioButtons from "../../../addProduct/formComponents/FormRadioButtons";
import classes from "./SortModal.module.css";

const options = [
  { option: "-price", label: "Price: low to high" },
  { option: "price", label: "Price: high to low" },
  { option: "-rating", label: "Rating: low to high" },
  { option: "rating", label: "Rating: high to low" },
  { option: "newest", label: "Added: newest to oldest" },
  { option: "-newest", label: "Added: oldest to newest" },
];

const SortModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const sortOption = useSelector((state) => state.query.value.sortBy);

  const [selected, setSelected] = useState(sortOption);
  const selectOption = () => {
    store.dispatch(queryActions.setSortBy(selected));
    store.dispatch(configActions.setFilterModal(null));
  };
  return (
    <div className={classesList}>
      <FormRadioButtons
        options={options}
        className={classes.radio}
        column={true}
        selected={selected}
        onSelect={(selected) => setSelected(selected)}
      />
      <Button text="Apply" alt={true} onClick={selectOption} />
    </div>
  );
};

export default SortModal;
