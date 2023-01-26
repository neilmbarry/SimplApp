import React from "react";
import classes from "./HostPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import banner from "../../img/banner.png";
import HostImage from "./HostImage/HostImage";

import HostAdditional from "./HostAdditional/HostAdditional";
import HostComponent from "./HostComponent/HostComponent";
import CarouselTile from "../../components/Carousel/CarouselTile";
import ProductReviews from "../product/ProductReviews/ProductReviews";

import images from "../../helpers/imagesObj";
import { useParams } from "react-router-dom";
import Button from "../../components/UI/Button";
import { useState } from "react";
import FormTextArea from "../addProduct/formComponents/FormTextArea";
import CarouselSection from "../../components/Carousel/CarouselSection";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../config/configParameters";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { dateFormat } from "../../helpers/dateFormat";

const hostInfo = {
  image: "runner",
  rating: 5,
};

const reviewsTemp = [
  {
    rating: 5,
    reviewer: "Neil B.",
    review:
      "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
    image: "runner",
    dateAdded: "June 20, 2022",
  },
  {
    rating: 5,
    reviewer: "Neil B.",
    review:
      "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
    image: "runner",
    dateAdded: "June 20, 2022",
  },
  {
    rating: 5,
    reviewer: "Neil B.",
    dateAdded: "June 20, 2022",
    review:
      "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
    image: "runner",
  },
];

const tilesArray = [
  "man1",
  "man2",
  "man3",
  "man4",
  "man5",
  "woman1",
  "woman2",
  "woman3",
  "woman4",
  "woman5",
].map((el) => {
  return {
    image: el,
  };
});

const HostPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const token = useSelector((state) => state.config.value.token);
  const [modifying, setModifying] = useState(false);
  const { id } = useParams();
  const { loading, error, data, getRequest } = useFetch({
    url: BASE_URL + "users/" + id,
  });
  console.log(data);
  useEffect(() => {
    if (!data) {
      getRequest(token);
    }
  }, []);
  return (
    <div className={classesList}>
      <NavBar search={true} />
      <div className={classes.banner}>
        <img src={banner} alt="" className={classes.bannerImg} />
      </div>
      <div className={classes.pageContent}>
        <div className={classes.left}>
          <div className={classes.titleContent}>
            <HostImage hostInfo={data?.user} className={classes.hostImage} />
            {!modifying ? (
              <div className={classes.modifyButtons}>
                <Button
                  text="Edit profile"
                  className={classes.editButton}
                  onClick={() => setModifying((prev) => !prev)}
                />
              </div>
            ) : (
              <div className={classes.modifyButtons}>
                <Button
                  text="Save Profile"
                  className={classes.editButton}
                  onClick={() => setModifying((prev) => !prev)}
                />
                <Button
                  text="Cancel"
                  alt={true}
                  className={classes.editButton}
                  onClick={() => setModifying((prev) => !prev)}
                />
              </div>
            )}
            <div className={classes.titleBox}>
              <h2>{data?.user.firstName + " " + data?.user.lastName + "."}</h2>
              <HostComponent title="Toronto, CA">
                <p>
                  {data?.user.trips} trips - Joined{" "}
                  {dateFormat(data?.user.joined)}
                </p>
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
            {modifying ? (
              <FormTextArea />
            ) : (
              <p>
                Freelance Journalist, Screenwriter, Customer service agent,
                Co-founder of the webseries Jada and Rémi, a mixed couple (An
                African girl and a Quebecer).
              </p>
            )}
          </HostComponent>
          {modifying && (
            <HostComponent title="Change image" className={classes.products}>
              <CarouselSection
                windows={3}
                // taller={true}

                tiles={tilesArray}
                className={classes.carousel}
                width={500}
                userSelect={true}
                selected={"shirt1"}
              />
            </HostComponent>
          )}
          <HostComponent
            title="Vincent's garments"
            className={classes.products}
          >
            <CarouselTile
              picture="hat"
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
