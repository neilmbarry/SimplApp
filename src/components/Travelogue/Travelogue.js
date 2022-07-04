import React from "react";
import classes from "./Travelogue.module.css";
import photo from "../../img-compressed/group.jpg";

const Travelogue = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.bg}>
        <img src={photo} alt="" />
      </div>
      <div className={classes.infoBox}>
        <h4>FEATURED TRAVELOGUE</h4>
        <h3>Discovering the natural wonders of Alberta</h3>
        <p>
          Retrace this dreamy road trop through the majestic landscapes of the
          Canadian Rockies.
        </p>
        <p>Read more</p>
      </div>
    </div>
  );
};

export default Travelogue;
