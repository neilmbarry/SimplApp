import React from "react";
import classes from "./ProductHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductHeader = ({ className, title, rating, trips }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.ratingBox}>
        {trips > 0 ? (
          <>
            <h3 className={classes.rating}>{rating?.toFixed(1) || "N/A"}</h3>
            <FontAwesomeIcon
              icon={faStar}
              className={classes.star}
            ></FontAwesomeIcon>
            <h4 className={classes.trips}>( {trips} trips )</h4>
          </>
        ) : (
          <h4 className={classes.new}>New!</h4>
        )}
      </div>
    </div>
  );
};

export default ProductHeader;
