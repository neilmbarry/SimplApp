import React from "react";
import classes from "./ProductReview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductReview = ({ className, review }) => {
  const classesList = `${classes.main} ${className}`;

  return (
    <div className={classesList}>
      <div className={classes.reviewPic}>
        <img src={review.image} alt="" />
      </div>
      <div className={classes.reviewInfo}>
        <div className={classes.reviewRating}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={classes.reviewName}>
          <h6>
            {review.reviewer} -{" "}
            <span className={classes.grey}> {review.dateAdded}</span>
          </h6>
        </div>
        <div className={classes.reviewText}>
          <h5>{review.review}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
