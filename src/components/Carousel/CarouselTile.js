import React from "react";
import classes from "./CarouselTile.module.css";

const CarouselTile = ({ picture, title, fraction, taller, width }) => {
  const tileWidth = (width || 1000) / fraction - 12;
  const style = { width: `${tileWidth}px` };
  return (
    <div className={classes.tile} style={style}>
      <div className={taller ? classes.picTaller : classes.pic}>
        <img src={picture} alt="" />
      </div>
      {title && <h4>{title}</h4>}
    </div>
  );
};

export default CarouselTile;
