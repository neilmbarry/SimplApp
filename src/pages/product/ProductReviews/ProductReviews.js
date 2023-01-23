import React from "react";
import classes from "./ProductReviews.module.css";
import ProductReview from "./ProductReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductReviews = ({ className, reviews, rating }) => {
  const classesList = `${classes.main} ${className}`;
  const reviewsArray = reviews?.map((review, i) => {
    return (
      <ProductReview
        key={review.image + (i + "")}
        review={review}
        className={classes.review}
      />
    );
  });
  return (
    <div className={classesList}>
      <h5>RATINGS AND REVIEWS</h5>
      <br />
      <div className={classes.ratingBox}>
        <h3 className={classes.larger}>{rating?.toFixed(1) || 0}</h3>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <h4>
          ( {reviews?.length} review{reviews?.length !== 1 && "s"} )
        </h4>
      </div>
      <br />
      <h5 className={classes.grey}>REVIEWS</h5>
      <div className={classes.reviewsBox}>
        {reviews?.length ? reviewsArray : <h4>No reviews yet!</h4>}
      </div>
    </div>
  );
};

export default ProductReviews;
