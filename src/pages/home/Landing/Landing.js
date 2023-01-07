import React, { useState } from "react";
import classes from "./Landing.module.css";

import photo1 from "../../../img/tamara-bellis-mNZ-GvOQUUY-unsplash.jpg";

import photo7 from "../../../img-compressed/tamara-bellis-WdPfMcpeQas-unsplash.jpg";
import Search from "../../../components/Search/Search";
import TitleSection from "../../../components/TitleSection/TitleSection";

const Landing = () => {
  console.log(classes.landing);
  const [pic, setPic] = useState(photo1);
  const interval = setInterval(() => {}, 3000);
  return (
    <section className={classes.landing}>
      <Search />
      <div className={classes.background}>
        <img src={photo7} alt="Piccy" />
      </div>
      <TitleSection
        main="Find your style"
        submain="Explore the world's largest wardrobe sharing marketplace"
      />
    </section>
  );
};

export default Landing;
