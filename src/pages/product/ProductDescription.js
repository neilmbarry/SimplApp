import React from "react";
import classes from "./ProductDescription.module.css";
import ProductFeatures from "./ProductFeatures/ProductFeatures";

const ProductDescription = ({ className, product }) => {
  const classesList = `${classes.main} ${className}`;

  return (
    <div className={classesList}>
      <h5>DESCRIPTION</h5>
      <br />
      {product?.description && (
        <div>
          <h4>{product?.description}</h4>
          <br />
        </div>
      )}

      <br />
      <h5>FEATURES</h5>

      <ProductFeatures
        features={product?.features}
        className={classes.features}
      />

      <br />
    </div>
  );
};

export default ProductDescription;
