import React from "react";
import classes from "./ProductFeatures.module.css";
import {
  faHandSparkles,
  faStar,
  faBatteryFull,
  faCar,
  faChair,
  faTrophy,
  faCircle,
  faAward,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Feature from "./Feature";

import { productIcons } from "../../../config/icons";

const iconsArray = [
  faHandSparkles,
  faStar,
  faBatteryFull,
  faCar,
  faChair,
  faTrophy,
  faCircle,
  faAward,
  faThumbsUp,
];

const ProductInfo = ({ className, product }) => {
  const classesList = `${classes.main} ${className}`;
  const randomIconIndex = () => {
    return Math.floor(Math.random() * iconsArray.length);
  };
  // console.log(randomIconIndex());
  const featuresArray = (
    <>
      <Feature feature={product?.size} icon={productIcons["size"]} />
      <Feature
        feature={product?.type}
        icon={productIcons[product?.type.toLowerCase()]}
      />
      <Feature feature={product?.activity} icon={productIcons["activity"]} />
      {product?.brand && (
        <Feature feature={product?.brand} icon={productIcons["brand"]} />
      )}
    </>
  );

  return <div className={classesList}>{featuresArray}</div>;
};

export default ProductInfo;
