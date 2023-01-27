import React from "react";
import classes from "./ProductImages.module.css";

import imagesObj from "../../helpers/imagesObj";
import imageObj from "../../helpers/imageArrays";
import LoadingSpinner from "../../components/UI/Spinner/Spinner";

const ProductImages = ({ className, image, loading }) => {
  const classesList = `${classes.main} ${className}`;

  return (
    <div className={classesList}>
      {loading && <LoadingSpinner className={classes.spinner} type={"dark"} />}
      {!loading && <img src={imagesObj[image]} alt="product" />}
    </div>
  );
};

export default ProductImages;
