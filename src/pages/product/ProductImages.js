import React from "react";
import classes from "./ProductImages.module.css";

import imagesObj from "../../helpers/imagesObj";
import imageObj from "../../helpers/imageArrays";

const ProductImages = ({ className, image }) => {
  const classesList = `${classes.main} ${className}`;
  
  return (
    <div className={classesList}>
      <img src={imagesObj[image]} alt="images[0]" />
    </div>
  );
};

export default ProductImages;
