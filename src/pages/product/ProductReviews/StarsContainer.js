import React from "react";
import classes from "./StarsContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";

const StarsContainer = ({ className, rating }) => {
  const classesList = `${classes.main} ${className}`;
  const ratingFloor = Math.floor(rating);
  const ratingRemainder = rating - ratingFloor;
  const display = Array(5)
    .fill(0)
    .map((el, i) => {
      if (ratingFloor > i) {
        return <FontAwesomeIcon icon={faStar} key={i} />;
      }
      if (ratingFloor === i && ratingRemainder < 0.2) {
        return <FontAwesomeIcon icon={faStarEmpty} key={i} />;
      }
      if (
        ratingFloor === i &&
        ratingRemainder >= 0.2 &&
        ratingRemainder < 0.8
      ) {
        return <FontAwesomeIcon icon={faStarHalfStroke} key={i} />;
      }
      if (ratingFloor === i) {
        return <FontAwesomeIcon icon={faStar} key={i} />;
      }
      return <FontAwesomeIcon icon={faStarEmpty} key={i} />;
    });
  return <div className={classesList}>{display}</div>;
};

export default StarsContainer;
