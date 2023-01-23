import React from "react";
import classes from "./ProductDescription.module.css";
import ProductFeatures from "./ProductFeatures/ProductFeatures";

const ProductDescription = ({ className, description, features }) => {
  const classesList = `${classes.main} ${className}`;

  return (
    <div className={classesList}>
      <h5>DESCRIPTION</h5>
      <br />
      {description && (
        <div>
          <h4>{description}</h4>
          <br />
        </div>
      )}
      {/* <h5>DELUXE CLASS</h5>
      <br />
      <h4>
        This super exclusive car has a few additional requirements, like a
        deposit.
      </h4> */}
      <br />
      <h5>FEATURES</h5>

      <ProductFeatures features={features} className={classes.features} />
      {/* 
      <h5>EXTRAS</h5>
      <br />
      <h4>Add optional extras at checkout.</h4> */}
      <br />
    </div>
  );
};

export default ProductDescription;
