import React from "react";
import classes from "./HostTile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import images from "../../helpers/imagesObj";

const CarouselTile = ({ fraction, info, review, parentKey }) => {
  const tileWidth = 1000 / fraction - 12;
  const style = { width: `${tileWidth}px` };

  return (
    <div className={classes.tile} style={style} key={parentKey}>
      <div className={classes.hostInfo}>
        <div className={classes.hostImage}>
          <img src={images[info.image]} alt="" />
        </div>
        <div className={classes.hostText}>
          <h4>{info.name}</h4>
          <h6>
            <FontAwesomeIcon icon={faTrophy} />
            All-Star Host
          </h6>
          <h6>
            {info.trips} trips - Joined {info.joined}
          </h6>
        </div>
      </div>
      <div className={classes.reviewInfo}>
        <div className={classes.rating}>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
        <div className={classes.review}>
          <p>{review.review}</p>
        </div>
        <div className={classes.author}>
          <h6>
            {review.reviewer} - {review.date}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CarouselTile;
