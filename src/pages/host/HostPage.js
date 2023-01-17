import React from "react";
import classes from "./HostPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import banner from "../../img/banner.png";
import HostImage from "./HostImage/HostImage";
import photo from "../../img-compressed/992-can-2x.jpg";
import HostAdditional from "./HostAdditional/HostAdditional";
import HostComponent from "./HostComponent/HostComponent";
import CarouselTile from "../../components/Carousel/CarouselTile";
import ProductReviews from "../product/ProductReviews/ProductReviews";

const hostInfo = {
  image: photo,
  rating: 5,
};

const reviewsTemp = [
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
];

const HostPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <NavBar search={true} />
      <div className={classes.banner}>
        <img src={banner} alt="" className={classes.bannerImg} />
      </div>
      <div className={classes.pageContent}>
        <div className={classes.left}>
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
            <p>Email</p>
          </HostComponent>
          <HostComponent title="Languages" className={classes.lang}>
            <p>English</p>
          </HostComponent>
          <HostComponent title="Works" className={classes.works}>
            <p>Downtown Toronto</p>
          </HostComponent>
          <HostComponent title="School" className={classes.school}>
            <p>University of Toronto</p>
          </HostComponent>
          {/* <HostComponent title="Host stats" className={classes.stats}>
            <p>Placeholder</p>
          </HostComponent> */}
        </div>
        <div className={classes.right}>
          <HostComponent title="About Vincent" className={classes.about}>
            <p>
              Freelance Journalist, Screenwriter, Customer service agent,
              Co-founder of the webseries Jada and Rémi, a mixed couple (An
              African girl and a Quebecer).
            </p>
          </HostComponent>
          <HostComponent
            title="Vincent's garments"
            className={classes.products}
          >
            <CarouselTile
              picture={photo}
              taller={true}
              product={{ title: "My car", rating: 4.9, reviews: 235 }}
            />
          </HostComponent>
          <HostComponent title="" className={classes.reviews}>
            <ProductReviews reviews={reviewsTemp} rating={4.9} />
          </HostComponent>
        </div>
      </div>
    </div>
  );
};

export default HostPage;
