import React from "react";
import classes from "./ProductReviews.module.css";
import ProductReview from "./ProductReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductReviews = ({ className, reviews, rating }) => {
  const classesList = `${classes.main} ${className}`;
  const reviewsArray = reviews.map((review) => {
    return (
      <ProductReview key={review} review={review} className={classes.review} />
    );
  });
  return (
    <>
      <h5>RATINGS AND REVIEWS</h5>
      <br />
      <div className={classes.ratingBox}>
        <h3 className={classes.larger}>{rating}</h3>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <h4>({reviews.length} ratings)</h4>
      </div>
      <br />
      <h5 className={classes.grey}>REVIEWS</h5>
      <div className={classes.reviewsBox}>{reviewsArray}</div>
    </>
  );
};

export default ProductReviews;
