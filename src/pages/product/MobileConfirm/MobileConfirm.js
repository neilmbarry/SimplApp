import React from "react";
import Button from "../../../components/UI/Button";
import classes from "./MobileConfirm.module.css";

const MobileConfirm = ({ className, product, onConfirm }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.container}>
        <div className={classes.totals}>
          <h5 className={classes.price}>
            <span className={classes.strike}>${product?.price}</span> $
            {product?.price - product?.discount} total
          </h5>
          <h6 className={classes.details}>View price details</h6>
        </div>
        <div className={classes.continue}>
          <Button text="Continue" onClick={onConfirm}></Button>
        </div>
      </div>
    </div>
  );
};

export default MobileConfirm;
