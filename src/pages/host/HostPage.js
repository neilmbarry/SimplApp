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
            <h6>Toronto, CA</h6>
          </div>
          <HostAdditional />
        </div>
        <HostComponent title="Verified Info">
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Languages">
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Works">
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="School">
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Host stats">
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="About Vincent">
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Vincent's garments">
          <p>Placeholder</p>
        </HostComponent>
        <HostComponent title="Reviews from guests">
          <p>Placeholder</p>
        </HostComponent>
      </div>
    </div>
  );
};

export default HostPage;
