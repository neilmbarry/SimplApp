import React from "react";
import classes from "./Result.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Savings from "../../components/UI/Savings";
import { Link, useNavigate } from "react-router-dom";

import images from "../../helpers/imagesObj";
import FaveIcon from "./FaveIcon";

const Result = ({ className, info }) => {
  const classesList = `${classes.main} ${className}`;
  const navigate = useNavigate();
  const navigateHandler = (e) => {
    console.log(e.target);
    navigate(`/product/${info?.slug}`);
  };
  const faveHandler = (e) => {
    console.log(e.target.value);
    e.stopPropagation();
  };

  return (
    <div className={classesList} onClick={navigateHandler}>
      <FaveIcon
        fave={true}
        className={classes.faveIcon}
        onClick={faveHandler}
      />
      <div className={classes.container}>
        <div className={classes.image}>
          <img
            src={images[info?.image]}
            alt="product"
            className={classes.img}
          />
        </div>
        <div className={classes.infoBox}>
          <h3>{info?.name}</h3>
          <div className={classes.ratingBox}>
            {info?.ratingsAverage > 0 ? (
              <>
                <h5>{info?.ratingsAverage || "N/A"}</h5>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <h5>({info?.ratingsQuantity} trips)</h5>
              </>
            ) : (
              <h4 className={classes.new}>New!</h4>
            )}
          </div>
        </div>
        <div className={classes.priceBox}>
          <div className={classes.totals}>
            <h3>
              {info?.discount && (
                <span className={classes.oldPrice}>
                  {info?.price && "$" + info?.price}
                </span>
              )}
              {"  "}${info?.price - (info?.discount ? 10 : 0)} total
            </h3>
            <h5 className={classes.details}>View price details</h5>
            {info?.discount && (
              <Savings className={classes.savings} saves={10} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
