import React from "react";
import classes from "./ProductPage.module.css";
import NavBar from "../NavBar/NavBar";
import photo from "../../img-compressed/jonathan-francisca-HY-Nr7GQs3k-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

const ProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <NavBar search={true} />
      <div className={classes.imageContainer}>
        <img src={photo} alt="" />
      </div>
      <div className={classes.pageContent}>
        <div className={classes.columnLeft}>
          <h2>Tesla Model S 2018</h2>
          <div className={classes.ratingBox}>
            <h3>{4.97}</h3>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <h4>({36} trips)</h4>
          </div>
          <div className={classes.featuresBox}>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faBatteryFull}></FontAwesomeIcon>
              <h4>Electric</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
              <h4>4 doors</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
              <h4>5 seats</h4>
            </div>
          </div>
          <h5>HOSTED BY</h5>
          <div className={classes.hostBox}>
            <div className={classes.hostPic}>
              <div className={classes.hostPicContainer}>
                <img src={photo} alt="" />
              </div>
              <div className={classes.hostRating}>
                <h5>5.0</h5>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
            </div>
            <div className={classes.hostInfo}>
              <h3>Neil B.</h3>
              <h4>
                <FontAwesomeIcon icon={faTrophy} />
                All-Star Host
              </h4>
              <h4 className={classes.bullet}>
                364 trips <FontAwesomeIcon icon={faCircle} /> Joined Sept 2013
              </h4>
              <h5>Typically responds in 2 minutes</h5>
            </div>
          </div>
          <div className={classes.additionalGroup}>
            <div className={classes.additionalInfo}>
              <FontAwesomeIcon icon={faAward} />
              <div className={classes.additionalText}>
                <h4>
                  All-Star Hosts like Neil are the top-rated and most
                  experienced hosts on Simp.
                </h4>
                <h5>Learn More</h5>
              </div>
            </div>
            <div className={classes.additionalInfo}>
              <FontAwesomeIcon icon={faHandSparkles} />
              <div className={classes.additionalText}>
                <h4>
                  Neil has completed training on enhanced cleaning and
                  desinfection practices.
                </h4>
                <h5>Learn More</h5>
              </div>
            </div>
          </div>
          <h5>DESCRIPTION</h5>
          <br />
          <h4>
            *FREE SUPERCHARGING AT ANY TESLA SUPERCHARGERS* <br />
            This is one of the very rare Tesla on here that offer you guys free
            supercharging.
          </h4>
          <br />
          <h4>
            *Corona virus update - all cars will be sterilized with 30 min.
            before and after each rental!
          </h4>
          <br />
          <h5>DELUXE CLASS</h5>
        </div>
        <div className={classes.columnRight}></div>
      </div>
    </div>
  );
};

export default ProductPage;
