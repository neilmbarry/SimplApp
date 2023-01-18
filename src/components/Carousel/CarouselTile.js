import React from "react";
import classes from "./CarouselTile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import images from "../../helpers/imagesObj";

const CarouselTile = ({ picture, title, fraction, taller, width, product }) => {
  const tileWidth = (width || 1000) / fraction - 12;
  const style = { width: `${tileWidth}px` };
  return (
    <div className={classes.tile} style={style}>
      <div className={taller ? classes.picTaller : classes.pic}>
        <img src={images[picture]} alt="" />
      </div>
      {title && <h4 className={classes.title}>{title}</h4>}
      {product && (
        <div className={classes.product}>
          <h3 className={classes.prodTitle}>{product.title}</h3>
          <div className={classes.ratingBox}>
            <h4>{product.rating || "unrated"}</h4>
            <FontAwesomeIcon icon={faStar} className={classes.star} />
            <h4>({product.reviews || "No"} trips)</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselTile;
