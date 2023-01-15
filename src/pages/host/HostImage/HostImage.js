import React from "react";
import classes from "./HostImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HostImage = ({ className, hostInfo }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.hostPicContainer}>
        <img src={hostInfo.image} alt={hostInfo.image} />
      </div>
      <div className={classes.hostRating}>
        <h5>{hostInfo.rating.toFixed(1)}</h5>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default HostImage;
