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

const ProductFeatures = ({ className, features }) => {
  const classesList = `${classes.main} ${className}`;
  const randomIconIndex = () => {
    return Math.floor(Math.random() * iconsArray.length);
  };

  const featuresArray = features?.map((feat) => {
    return (
      <Feature key={feat} feature={feat} icon={iconsArray[randomIconIndex()]} />
    );
  });

  return <div className={classesList}>{featuresArray}</div>;
};

export default ProductFeatures;
