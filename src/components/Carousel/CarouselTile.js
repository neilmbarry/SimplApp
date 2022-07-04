import React from "react";
import classes from "./CarouselTile.module.css";

const CarouselTile = ({ picture, children, title, fraction, taller }) => {
  const tileWidth = 1000 / fraction - 12;
  const style = { width: `${tileWidth}px` };
  return (
    <div className={classes.tile} style={style}>
      <div className={taller ? classes.picTaller : classes.pic}>
        <img src={picture} alt="" />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default CarouselTile;
