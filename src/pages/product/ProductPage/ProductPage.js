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
import ProductImages from "../ProductImages";
import ProductHeader from "../ProductHeader";
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import HostInfo from "../HostInfo";
import ProductDescription from "../ProductDescription";
import ProductReviews from "../ProductReviews/ProductReviews";

const productTemplate = {
  images: [photo],
  name: "Louis Vuitton Grey Blazer",
  rating: 4.97,
  trips: 36,
  features: ["Re-chargeable", "4 pockets", "1 seat"],
  host: {
    name: "Neil B.",
    joined: "Sept 2013",
    rating: 5,
    trips: 258,
    allStar: true,
    trained: true,
    image: photo2,
  },
  description: {
    bio: [
      "*FREE SUPERCHARGING AT ANY TESLA SUPERCHARGERS*    This is one of the very rare Tesla on here that offer you guys free supercharging.",
      "*Corona virus update - all cars will be sterilized with 30 min. before and after each rental!",
    ],

    extras: "Add optional extras at checkout.",
  },
  reviews: [
    {
      rating: 5,
      reviewer: "Neil B.",
      review:
        "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
      image: photo,
      dateAdded: "June 20, 2022",
    },
    {
      rating: 5,
      reviewer: "Neil B.",
      review:
        "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
      image: photo,
      dateAdded: "June 20, 2022",
    },
    {
      rating: 5,
      reviewer: "Neil B.",
      dateAdded: "June 20, 2022",
      review:
        "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
      image: photo,
    },
  ],
  price: 729,
  discount: {
    type: "3+ day",
    amount: 19,
  },
};

const ProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <NavBar search={true} />
      <ProductImages images={productTemplate.images} />
      <div className={classes.pageContent}>
        <div className={classes.columnLeft}>
          <ProductHeader
            title={productTemplate.name}
            rating={productTemplate.rating}
            trips={productTemplate.trips}
          />
          <ProductFeatures features={productTemplate.features} />
          <HostInfo hostInfo={productTemplate.host} />
          <ProductDescription
            description={productTemplate.description}
            features={productTemplate.features}
          />
          <ProductReviews
            reviews={productTemplate.reviews}
            rating={productTemplate.rating}
          />
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
