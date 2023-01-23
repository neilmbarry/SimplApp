import React from "react";
import classes from "./HostImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import images from "../../../helpers/imagesObj";

const HostImage = ({ className, hostInfo }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.hostPicContainer}>
        <img src={images[hostInfo?.image]} alt="The host" />
      </div>
      <div className={classes.hostRating}>
        {hostInfo?.ratingsAverage ? (
          <>
            <h5>{hostInfo?.ratingsAverage.toFixed(1)}</h5>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </>
        ) : (
          <h6 className={classes.new}>New!</h6>
        )}
      </div>
    </div>
  );
};

export default HostImage;
