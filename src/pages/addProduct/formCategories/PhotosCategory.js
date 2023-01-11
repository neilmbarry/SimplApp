import React from "react";
import classes from "./PhotosCategory.module.css";

const PhotosCategory = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>PhotosCategory</div>;
};

export default PhotosCategory;
