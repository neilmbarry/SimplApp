import React from "react";
import classes from "./SubtitleSection.module.css";
import Button from "../UI/Button";

const TitleSection = ({ main, submain, button }) => {
  return (
    <section className={classes.main}>
      <h1 className={classes.title}>{main}</h1>
      {submain ? <h3>{submain}</h3> : null}
      {button ? <Button text={button} /> : null}
    </section>
  );
};

export default TitleSection;
