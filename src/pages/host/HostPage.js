import React from "react";
import classes from "./HostPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import banner from "../../img/banner.png";
import HostImage from "./HostImage/HostImage";
import photo from "../../img-compressed/992-can-2x.jpg";
import HostAdditional from "./HostAdditional/HostAdditional";
import HostComponent from "./HostComponent/HostComponent";

const hostInfo = {
  image: photo,
  rating: 5,
};

const HostPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <NavBar search={true} />
      <div className={classes.banner}>
        <img src={banner} alt="" className={classes.bannerImg} />
      </div>
      <div className={classes.pageContent}>
        <div className={classes.titleContent}>
          <HostImage hostInfo={hostInfo} className={classes.hostImage} />
          <div className={classes.titleBox}>
            <h2>Neil B.</h2>
            <HostComponent title="Toronto, CA">
              <p>4819 trips - Joined Dec 2020</p>
            </HostComponent>
          </div>
          <HostAdditional />
        </div>
        <HostComponent title="Verified Info" className={classes.verified}>
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Languages" className={classes.lang}>
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Works" className={classes.works}>
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="School" className={classes.school}>
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Host stats" className={classes.stats}>
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="About Vincent" className={classes.about}>
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Vincent's garments" className={classes.products}>
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Reviews from guests" className={classes.reviews}>
          <p>Placeholder</p>
        </HostComponent>
      </div>
    </div>
  );
};

export default HostPage;
