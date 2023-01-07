import React from "react";
import classes from "./ProductPage.module.css";
import NavBar from "../../../components/NavBar/NavBar";
import photo from "../../../img-compressed/jonathan-francisca-HY-Nr7GQs3k-unsplash.jpg";
import photo2 from "../../../img-compressed/runn.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles,
  faStar,
  faBatteryFull,
  faCar,
  faChair,
  faTrophy,
  faCircle,
  faAward,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/UI/Button";
import Footer from "../../../components/Footer/Footer";

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
          <h2>Louis Vuitton Grey Blazer</h2>
          <div className={classes.ratingBox}>
            <h3>{4.97}</h3>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <h4>({36} trips)</h4>
          </div>
          <div className={classes.featuresBox}>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faBatteryFull}></FontAwesomeIcon>
              <h4>Re-chargable</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
              <h4>4 pockets</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
              <h4>1 seat</h4>
            </div>
          </div>
          <h5>HOSTED BY</h5>
          <div className={classes.hostBox}>
            <div className={classes.hostPic}>
              <div className={classes.hostPicContainer}>
                <img src={photo2} alt="" />
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
          <br />
          <h4>
            This super exclusive car has a few additional requirements, like a
            deposit.
          </h4>
          <br />
          <h5>FEATURES</h5>
          <div className={classes.featuresBox}>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faBatteryFull}></FontAwesomeIcon>
              <h4>Re-chargable</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
              <h4>4 pockets</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
              <h4>1 seat</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
              <h4>1 seat</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
              <h4>1 seat</h4>
            </div>
            <div className={classes.feature}>
              <FontAwesomeIcon icon={faChair}></FontAwesomeIcon>
              <h4>1 seat</h4>
            </div>
          </div>
          <br />
          <h5>EXTRAS</h5>
          <br />
          <h4>Add optional extras at checkout.</h4>
          <br />
          <h5>RATINGS AND REVIEWS</h5>
          <br />
          <div className={classes.ratingBox}>
            <h3 className={classes.larger}>{4.97}</h3>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <h4>({24} ratings)</h4>
          <br />
          <h5 className={classes.grey}>REVIEWS</h5>
          <div className={classes.reviewsBox}>
            <div className={classes.review}>
              <div className={classes.reviewPic}>
                <img src={photo} alt="" />
              </div>
              <div className={classes.reviewInfo}>
                <div className={classes.reviewRating}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={classes.reviewName}>
                  <h6>
                    Neil B. -{" "}
                    <span className={classes.grey}> Jun 20, 2022</span>
                  </h6>
                </div>
                <div className={classes.reviewText}>
                  <h5>
                    Amazing car with an amazing host no problems at all car was
                    super clean fun and luxury at the same pace host was
                    fantastic with communication will defiantly rent again.
                    Thank you.
                  </h5>
                </div>
              </div>
            </div>
            <div className={classes.review}>
              <div className={classes.reviewPic}>
                <img src={photo} alt="" />
              </div>
              <div className={classes.reviewInfo}>
                <div className={classes.reviewRating}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={classes.reviewName}>
                  <h6>
                    Neil B. -{" "}
                    <span className={classes.grey}> Jun 20, 2022</span>
                  </h6>
                </div>
                <div className={classes.reviewText}>
                  <h5>
                    Amazing car with an amazing host no problems at all car was
                    super clean fun and luxury at the same pace host was
                    fantastic with communication will defiantly rent again.
                    Thank you.
                  </h5>
                </div>
              </div>
            </div>
            <div className={classes.review}>
              <div className={classes.reviewPic}>
                <img src={photo} alt="" />
              </div>
              <div className={classes.reviewInfo}>
                <div className={classes.reviewRating}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={classes.reviewName}>
                  <h6>
                    Neil B. -{" "}
                    <span className={classes.grey}> Jun 20, 2022</span>
                  </h6>
                </div>
                <div className={classes.reviewText}>
                  <h5>
                    Amazing car with an amazing host no problems at all car was
                    super clean fun and luxury at the same pace host was
                    fantastic with communication will defiantly rent again.
                    Thank you.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.columnRight}>
          <div className={classes.priceBox}>
            <h3>
              <span className={classes.oldPrice}>$729</span> US$710 total
            </h3>
            <h4>View price details</h4>
          </div>
          <div className={classes.tripOptions}>
            <div className={classes.datesBox}>
              <h4>Trip start</h4>
              <div className={classes.inputs}>
                <input type="date" defaultValue="2022-06-03" />
                <input type="time" defaultValue="10:00" />
              </div>
            </div>
            <div className={classes.datesBox}>
              <h4>Trip end</h4>
              <div className={classes.inputs}>
                <input type="date" defaultValue="2022-06-03" />
                <input type="time" defaultValue="10:00" />
              </div>
            </div>
            <div className={classes.datesBox}>
              <h5>Pickip & return location</h5>
              <div className={classes.inputs}>
                <select>
                  <option value="">Airport</option>
                  <option value="">Airport</option>
                  <option value="">Airport</option>
                </select>
              </div>
            </div>
            <div className={classes.discountBox}>
              <div className={classes.discount}>
                <h3>3+ day discount</h3>
              </div>
              <div className={classes.discountValue}>
                <h3>US$19</h3>
              </div>
            </div>
            <Button text="Continue" />
          </div>
          <div className={classes.cancellationBox}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <div className={classes.cancellationText}>
              <h5>Free cancellation</h5>
              <h4>Full refund before 8 Jul, 10:00 AM</h4>
            </div>
          </div>
          <div className={classes.distanceBox}>
            <div className={classes.distance}>
              <h4>Distance included</h4>
              <h4>600 mi</h4>
            </div>
            <h6>US$1.02/mi fee for additional miles driven</h6>
          </div>
          <div className={classes.distanceBox}>
            <h6>INSURANCE & PROTECTION</h6>
            <br />
            <h4>Insurance via Travelers</h4>
          </div>
          <div className={classes.distanceBox}>
            <Button text="Add to favourites" className={classes.favButton} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
