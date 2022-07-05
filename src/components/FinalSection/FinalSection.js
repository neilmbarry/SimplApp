import React from "react";
import classes from "./FinalSection.module.css";
import illustration1 from "../../img-compressed/illust1.png";
import illustration2 from "../../img-compressed/illust2.png";

const FinalSection = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <div className={classes.box}>
        <div className={classes.bg}></div>
        <div className={classes.column}>
          <div className={classes.text}>
            <h2>Book a car {">"}</h2>
            <h4>
              Down the street or across the country, find the perfect vehicle
              fro your next adventure.
            </h4>
          </div>
          <div className={classes.image}>
            <img src={illustration1} alt="" />
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.image}>
            <img src={illustration2} alt="" />
          </div>
          <div className={classes.text}>
            <h2>Become a host {">"} </h2>
            <h4>
              Accelerate your entrepreneurship and start building a small car
              sharing business on Simp.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
