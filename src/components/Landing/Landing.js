import React, { useState } from "react";
import classes from "./Landing.module.css";
import photo from "../../img/992-can-2x.jpg";
import photo1 from "../../img/tamara-bellis-mNZ-GvOQUUY-unsplash.jpg";
import photo2 from "../../img/chantelle-taylor-KGR6BzW6k4w-unsplash.jpg";
import photo3 from "../../img/hannah-skelly-ZddhWFwzEDo-unsplash.jpg";
import photo4 from "../../img/jonathan-francisca-HY-Nr7GQs3k-unsplash.jpg";
import photo5 from "../../img/tamara-bellis-0C2qrwkR1dI-unsplash.jpg";
import photo6 from "../../img/tamara-bellis-uN1m9Ca0aqo-unsplash.jpg";
import photo7 from "../../img/tamara-bellis-WdPfMcpeQas-unsplash.jpg";
import Search from "../Search/Search";
import TitleSection from "../TitleSection/TitleSection";

const Landing = () => {
  const [pic, setPic] = useState(photo1);
  const interval = setInterval(() => {}, 3000);
  return (
    <section className={classes.landing}>
      <Search />
      <div className={classes.background}>
        <img src={photo7} alt="Piccy" />
      </div>
      <TitleSection />
    </section>
  );
};

export default Landing;
