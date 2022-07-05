import React from "react";
import classes from "./Result.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Savings from "../UI/Savings";

const Result = ({ className, info }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.image}>
        <img src={info.image} alt="" />
      </div>
      <div className={classes.infoBox}>
        <h3>{info.name}</h3>
        <div className={classes.ratingBox}>
          <h5>{info.rating}</h5>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <h5>({info.trips} trips)</h5>
        </div>
      </div>
      <div className={classes.priceBox}>
        <div className={classes.totals}>
          <h3>
            <span className={classes.oldPrice}>
              {info.oldPrice && "$" + info.oldPrice}
            </span>
            {"  "}
            US${info.price} total
          </h3>
          <h5 className={classes.details}>View price details</h5>
          {info.oldPrice && (
            <Savings
              className={classes.savings}
              saves={info.oldPrice - info.price}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
