import React from "react";
import classes from "./CarouselTile.module.css";
import photo from "../../img/tamara-bellis-mNZ-GvOQUUY-unsplash.jpg";

const CarouselTile = ({ picture, children, title }) => {
  // console.log(props);
  return (
    <div className={classes.tile}>
      <div className={classes.pic}>{children}</div>
      <h4>{title}</h4>
    </div>
  );
};

export default CarouselTile;
