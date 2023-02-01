import React from "react";
import classes from "./Result.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Savings from "../../components/UI/Savings";
import { useNavigate } from "react-router-dom";

import images from "../../helpers/imagesObj";
import FaveIcon from "./FaveIcon";

import { useSelector } from "react-redux";

const Result = ({ className, info, refresh = () => null }) => {
  const classesList = `${classes.main} ${className}`;
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/product/${info?.slug}`);
  };

  const userFaves = useSelector((state) => state.config.value.userFaves);

  const ratingInfo =
    info?.ratingsAverage > 0 ? (
      <>
        <h5>{info?.ratingsAverage.toFixed(1) || "N/A"}</h5>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <h5>({info?.ratingsQuantity} trips)</h5>
      </>
    ) : (
      <h4 className={classes.new}>New!</h4>
    );

  const discountInfo = (
    <>
      <h3>
        {info?.discount && (
          <span className={classes.oldPrice}>
            {info?.price && "$" + info?.price}
          </span>
        )}
        {"  "}${info?.price - (info?.discount ? 10 : 0)} total
      </h3>
      <h5 className={classes.details}>View price details</h5>
      {info?.discount && <Savings className={classes.savings} saves={10} />}
    </>
  );

  return (
    <div className={classesList}>
      <FaveIcon
        fave={userFaves.includes(info.id)}
        className={classes.faveIcon}
        productId={info?.id}
        refresh={() => {
          console.log("refreshing");
          refresh();
        }}
      />
      <div className={classes.container} onClick={navigateHandler}>
        <div className={classes.image}>
          <img
            src={images[info?.image]}
            alt="product"
            className={classes.img}
          />
        </div>
        <div className={classes.infoBox}>
          <h3>{info?.name}</h3>
          <div className={classes.ratingBox}>{ratingInfo}</div>
        </div>
        <div className={classes.priceBox}>
          <div className={classes.totals}>{discountInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
