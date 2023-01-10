import React from "react";
import classes from "./ProductImages.module.css";

const ProductImages = ({ className, images }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <img src={images[0]} alt="images[0]" />
    </div>
  );
};

export default ProductImages;
