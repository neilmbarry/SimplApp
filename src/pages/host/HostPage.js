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
import { Link, useParams } from "react-router-dom";
import Button from "../../components/UI/Button";
import { useState } from "react";
import FormTextArea from "../addProduct/formComponents/FormTextArea";
import CarouselSection from "../../components/Carousel/CarouselSection";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../config/configParameters";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { dateFormat } from "../../helpers/dateFormat";
import { useRef } from "react";
import store from "../../store/store";
import configActions from "../../store/configSlice";

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
  const textRef = useRef();
  const { id } = useParams();
  const { loading, error, data, getRequest, postRequest } = useFetch({
    url: BASE_URL + "users/" + id,
  });
  const [selectedImage, setSelectedImage] = useState(data?.user?.image);

  const submitUpdates = () => {
    postRequest(
      JSON.stringify({
        image: selectedImage,
        about: textRef.current.value,
      }),
      token,
      "PATCH"
    );
  };

  const productsJSX = data?.user?.hostProducts?.map((prod) => {
    return (
      <Link to={"/product/" + prod.slug}>
        <CarouselTile
          picture={prod.image}
          taller={true}
          product={{
            title: prod.name,
            rating: prod.ratingsAverage,
            reviews: prod.ratingsQuantity,
          }}
        />
      </Link>
    );
  });

  useEffect(() => {
    if (!data) {
      getRequest(token);
    }
  }, []);

  useEffect(() => {
    getRequest(token);
  }, [id]);

  useEffect(() => {
    if (!data) {
      return;
    }
    if (id === "me") {
      store.dispatch(configActions.setUserImage(data?.user?.image));
    }
  }, [data]);

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
            <div className={id !== "me" && classes.modifyBox}>
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
                    onClick={() => submitUpdates()}
                  />
                  <Button
                    text="Cancel"
                    alt={true}
                    className={classes.editButton}
                    onClick={() => setModifying((prev) => !prev)}
                  />
                </div>
              )}
            </div>
            <div className={classes.titleBox}>
              <h2>
                {data?.user?.firstName + " " + data?.user?.lastName[0] + "."}
              </h2>
              <HostComponent title="Toronto, CA">
                <p>
                  {data?.user?.reviews?.length} trips - Joined{" "}
                  {dateFormat(data?.user?.joined)}
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
        </div>
        <div className={classes.right}>
          <HostComponent
            title={`About ${id === "me" ? "You" : data?.user?.firstName}`}
            className={classes.about}
          >
            {modifying ? (
              <FormTextArea parentRef={textRef} />
            ) : (
              <p>
                {data?.user?.about ||
                  "Tell hosts and guests about yourself and why you’re a responsible, trustworthy person. Share your favorite travel experiences, your hobbies, your dream car, or your driving experience. Feel free to include links to your LinkedIn, Twitter, or Facebook profiles so they get to know you even better."}
              </p>
            )}
          </HostComponent>
          {modifying && (
            <HostComponent title="Change image" className={classes.products}>
              <CarouselSection
                windows={3}
                onSelect={(img) => setSelectedImage(img)}
                tiles={tilesArray}
                className={classes.carousel}
                width={500}
                userSelect={true}
                selected={selectedImage}
              />
            </HostComponent>
          )}
          <HostComponent
            title={`${
              id === "me" ? "Your" : data?.user?.firstName + "'s"
            } garments`}
            className={classes.products}
          >
            {productsJSX}
          </HostComponent>
          <HostComponent title="" className={classes.reviews}>
            <ProductReviews
              reviews={data?.user?.reviews}
              rating={data?.user?.ratingsAverage}
            />
          </HostComponent>
        </div>
      </div>
    </div>
  );
};

export default HostPage;
