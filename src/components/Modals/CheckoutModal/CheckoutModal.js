import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";
import classes from "./CheckoutModal.module.css";
import HostImage from "../../../pages/host/HostImage/HostImage";
import ReviewStarContainer from "../../UI/RatingStars/ReviewStarContainer";
import FormTextArea from "../../../pages/addProduct/formComponents/FormTextArea";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../config/configParameters";
import store from "../../../store/store";
import configActions from "../../../store/configSlice";

const CheckoutModal = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const hostReviewRef = useRef();
  const productReviewRef = useRef();
  const [hostRating, setHostRating] = useState();
  const [productRating, setProductRating] = useState();

  const token = useSelector((state) => state.config.value.token);
  const product = useSelector((state) => state.config.value.currentProduct);

  const { loading, error, data, postRequest } = useFetch({
    url: BASE_URL + "reviews",
  });
  const {
    loading: hostLoading,
    error: hostError,
    data: hostData,
    postRequest: hostPostRequest,
  } = useFetch({
    url: BASE_URL + "reviews",
  });

  const submitReviews = () => {
    const hostReview = {
      rating: hostRating,
      summary: hostReviewRef.current.value,
      hostId: product.host.id,
    };
    const productReview = {
      rating: productRating,
      summary: productReviewRef.current.value,
      productId: product.id,
    };

    const body = JSON.stringify(productReview);
    const hostBody = JSON.stringify(hostReview);
    postRequest(body, token);
    hostPostRequest(hostBody, token);
  };

  useEffect(() => {
    if (data?.status === "success" && hostData?.status === "success") {
      store.dispatch(configActions.setModal(null));
      store.dispatch(configActions.setNotification("Success"));
      store.dispatch(configActions.setRefresh([]));
    }
    if (error || hostError) {
      store.dispatch(configActions.setNotification("Error"));
    }
  }, [error, hostError, data, hostData]);

  return (
    <div className={classesList}>
      <h2 className={classes.title}>Review your experience</h2>
      <form className={classes.form}>
        <div className={classes.inputElement}>
          <div className={classes.reviewContainer}>
            <div className={classes.infoContainer}>
              <h3 className={classes.label}>
                {product?.host.firstName} {product?.host.lastName[0]}.
              </h3>
              <HostImage hostInfo={product.host} />
            </div>
            <div className={classes.ratingBox}>
              <ReviewStarContainer
                onClick={(rating) => setHostRating(rating)}
              />
              <FormTextArea
                className={classes.textArea}
                placeholder="Enter a short review of your host"
                parentRef={hostReviewRef}
              />
            </div>
          </div>
        </div>
        <div className={classes.inputElement}>
          <div className={classes.reviewContainer}>
            <div className={classes.infoContainer}>
              <h3 className={classes.label}>{product.name}</h3>
              <HostImage
                hostInfo={{
                  image: product.image,
                  ratingsAverage: product.ratingsAverage,
                }}
              />
            </div>
            <div className={classes.ratingBox}>
              <ReviewStarContainer
                onClick={(rating) => setProductRating(rating)}
              />
              <FormTextArea
                className={classes.textArea}
                placeholder="Enter a short review of the product"
                parentRef={productReviewRef}
              />
            </div>
          </div>
        </div>
      </form>

      <Button text="Submit" onClick={submitReviews} />
      {/* <div className={classes.switchBox}>
        <h5>Too much trouble?</h5>
        <Button alt={true} text="Skip" onClick={null} />
      </div> */}
    </div>
  );
};

export default CheckoutModal;
