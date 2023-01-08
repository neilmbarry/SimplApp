import React from "react";
import classes from "./TitleSection.module.css";
import Button from "../UI/Button";

const TitleSection = ({ main, submain, button, className }) => {
  return (
    <section className={`${classes.main} ${className}`}>
      <h1>{main}</h1>
      {submain ? <h3>{submain}</h3> : <div className={classes.purpleBox}></div>}
      {button ? <Button text={button} /> : null}
    </section>
  );
};

export default TitleSection;
