import React, { useState } from "react";
import classes from "./Landing.module.css";

import Search from "../../../components/Search/Search";
import TitleSection from "../../../components/TitleSection/TitleSection";
import images from "../../../helpers/imagesObj";

const Landing = () => {
  return (
    <section className={classes.landing}>
      <Search />
      <div className={classes.background}>
        <img src={images["hat"]} alt="Piccy" />
      </div>
      <TitleSection
        className={classes.title}
        main="Find your style"
        submain="Explore the world's largest wardrobe sharing marketplace"
      />
    </section>
  );
};

export default Landing;
