import React from "react";
import Button from "../../../components/UI/Button";
import FormCheckBox from "../../addProduct/formComponents/FormCheckBox";
import FormDropdown from "../../addProduct/formComponents/FormDropdown";
import classes from "./FilterModal.module.css";

const sortOptions = [
  "Price: low to high",
  "Price: high to low",
  "Rating: low to high",
  "Rating: high to low",
];
const typeOptions = ["Shirt", "Pants", "Dresses", "Shoes"];
const sizeOptions = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
const brandOptions = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
const activityOptions = [
  "Extra Small",
  "Small",
  "Medium",
  "Large",
  "Extra Large",
];

const FilterModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const types = (options) => {
    return options.map((op) => {
      return <FormCheckBox option={op} key={op} />;
    });
  };

  return (
    <div className={classesList}>
      <h2 className={classes.title}>Filters</h2>
      <form className={classes.form}>
        <FormDropdown
          options={sortOptions}
          label="Sort by"
          className={classes.dropdown}
        />
        <div className={classes.filterOption}>
          <h5>Type</h5>
          <div className={classes.options}>{types(typeOptions)}</div>
        </div>
        <div className={classes.filterOption}>
          <h5>Size</h5>
          <div className={classes.options}>{types(sizeOptions)}</div>
        </div>
        <div className={classes.filterOption}>
          <h5>Brand</h5>
          <div className={classes.options}>{types(brandOptions)}</div>
        </div>
        <div className={classes.filterOption}>
          <h5>Activity</h5>
          <div className={classes.options}>{types(activityOptions)}</div>
        </div>
      </form>
      <Button text="View results" />
    </div>
  );
};

export default FilterModal;
