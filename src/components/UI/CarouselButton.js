import React from "react";
import classes from "./CarouselButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const CarouselButton = ({ type, onClick }) => {
  const icon = type === "left" ? faChevronLeft : faChevronRight;
  return (
    <button className={`${classes[type]} ${classes.main}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CarouselButton;
