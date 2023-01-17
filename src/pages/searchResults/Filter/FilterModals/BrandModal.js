import React from "react";
import classes from "./BrandModal.module.css";

const BrandModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return <div className={classesList}>BrandModal</div>;
};

export default BrandModal;
