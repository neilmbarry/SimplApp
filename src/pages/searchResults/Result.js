import React from "react";
import classes from "./Result.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Savings from "../../components/UI/Savings";
import { Link } from "react-router-dom";

import images from "../../helpers/imagesObj";

const Result = ({ className, info }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <Link to={`/product/${info.slug}`}>
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={images[info.image]} alt="product" />
          </div>
          <div className={classes.infoBox}>
            <h3>{info.name}</h3>
            <div className={classes.ratingBox}>
              {info?.trips > 0 ? (
                <>
                  <h5>{info.rating || "N/A"}</h5>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <h5>({info.trips} trips)</h5>
                </>
              ) : (
                <h4 className={classes.new}>New!</h4>
              )}
            </div>
          </div>
          <div className={classes.priceBox}>
            <div className={classes.totals}>
              <h3>
                {info.discount && (
                  <span className={classes.oldPrice}>
                    {info.price && "$" + info.price}
                  </span>
                )}
                {"  "}${info.price - (info.discount ? 10 : 0)} total
              </h3>
              <h5 className={classes.details}>View price details</h5>
              {info.discount && (
                <Savings className={classes.savings} saves={10} />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Result;
