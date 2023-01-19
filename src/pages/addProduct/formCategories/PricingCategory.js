import React from "react";
import classes from "./PricingCategory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import FormRadioButtons from "../formComponents/FormRadioButtons";

const PricingCategory = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.priceComponent}>
        <h4>How much would you like to rent your item for?</h4>
        <div className={classes.priceBox}>
          <FontAwesomeIcon icon={faDollar} className={classes.dollar} />
          <input
            type="number"
            className={classes.input}
            max={999}
            min={1}
            placeholder={100}
          />
        </div>
      </div>
      <FormRadioButtons
        options={["Early Bird", "Seniors", "Student"]}
        label="Would you like to offer a discount?"
      />
    </div>
  );
};

export default PricingCategory;
