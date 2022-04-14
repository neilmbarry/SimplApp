import React from "react";
import classes from "./TitleSection.module.css";
import Button from "../UI/Button";

const TitleSection = ({ main, submain, button }) => {
  return (
    <section className={classes.main}>
      <h1>{main}</h1>
      {submain ? <h3>{submain}</h3> : null}
      {button ? <Button text={button} /> : null}
    </section>
  );
};

export default TitleSection;
