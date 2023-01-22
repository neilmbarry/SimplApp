import React from "react";
import classes from "./PricingCategory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import FormRadioButtons from "../formComponents/FormRadioButtons";
import { useRef } from "react";
import { useSelector } from "react-redux";
import store from "../../../store/store";
import newProductActions from "../../../store/newProductSlice";

const PricingCategory = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const discount = useSelector(
    (state) => state.newProduct.value.value.discount
  );
  const updateDiscount = (selected) => {
    console.log("updateing");
    store.dispatch(newProductActions.updateDiscount(selected));
  };
  const updatePrice = () => {
    store.dispatch(newProductActions.updatePrice(price.current.value));
  };
  const price = useRef();
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
            ref={price}
            onChange={updatePrice}
          />
        </div>
      </div>
      <FormRadioButtons
        options={["No discount", "Early bird", "Seniors", "Student"]}
        label="Would you like to offer a discount?"
        selected={discount}
        onChange={updateDiscount}
      />
    </div>
  );
};

export default PricingCategory;
