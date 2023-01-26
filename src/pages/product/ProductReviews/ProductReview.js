import React from "react";
import classes from "./ProductReview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { dateFormat } from "../../../helpers/dateFormat";

import images from "../../../helpers/imagesObj";
import StarsContainer from "./StarsContainer";

const ProductReview = ({ className, review }) => {
  const classesList = `${classes.main} ${className}`;

  return (
    <div className={classesList}>
      <div className={classes.reviewPic}>
        <img src={images[review.user?.image || "man1"]} alt="user" />
      </div>
      <div className={classes.reviewInfo}>
        <StarsContainer rating={review.rating} />

        <div className={classes.reviewName}>
          <h6>
            {review.user?.firstName || "Anon."} -{" "}
            <span className={classes.grey}>
              {" "}
              {dateFormat(review.createdAt)}
            </span>
          </h6>
        </div>
        <div className={classes.reviewText}>
          <h5>{review.summary}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
