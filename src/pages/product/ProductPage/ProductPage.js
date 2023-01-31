// Main imports
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Styles
import classes from "./ProductPage.module.css";

// Components
import ProductInfo from "../ProductFeatures/ProductInfo";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import ProductImages from "../ProductImages";
import ProductHeader from "../ProductHeader";
import HostInfo from "../HostInfo";
import ProductDescription from "../ProductDescription";
import ProductReviews from "../ProductReviews/ProductReviews";
import BookingColumn from "../BookingColumn";
import MobileConfirm from "../MobileConfirm/MobileConfirm";
import FaveIcon from "../../searchResults/FaveIcon";

// State management
import store from "../../../store/store";
import configActions from "../../../store/configSlice";

// Hooks
import useFetch from "../../../hooks/useFetch";

// Config
import { BASE_URL } from "../../../config/configParameters";

const ProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  // const product = useSelector((state) => state.config.value.currentProduct);
  const token = useSelector((state) => state.config.value.token);
  const notification = useSelector((state) => state.config.value.notification);
  const params = useParams();
  const userFaves = useSelector((state) => state.config.value.userFaves);
  const { loading, error, data, getRequest } = useFetch({
    url: `${BASE_URL}products/${params.slug}`,
  });
  const {
    loading: faveLoading,
    error: faveError,
    data: faveData,
    postRequest,
  } = useFetch({
    url: `${BASE_URL}users/toggleFave`,
  });

  const favouriteHandler = () => {
    if (!token) {
      return store.dispatch(configActions.setModal("signup"));
    }
    postRequest(
      JSON.stringify({
        productId: data?.product?.id,
      }),
      token,
      "PATCH"
    );
  };

  const checkout = () => {
    if (!token) {
      return store.dispatch(configActions.setModal("signup"));
    }

    store.dispatch(configActions.setModal("checkout"));
  };

  useEffect(() => {
    console.log("use effect");
    if (!data) {
      console.log("use effect - getting request");
      return getRequest();
    }
    if (data.status === "success") {
      console.log("success getting data");
      store.dispatch(configActions.setCurrentProduct(data.product));
    }
    if (data.status === "fail" || data.status === "error") {
      console.log("error getting data");
      store.dispatch(configActions.setNotification(error.message));
    }
  }, [data]);

  // useEffect(() => {
  //   getRequest();
  // }, [notification]);

  return (
    <div className={classesList}>
      <NavBar search={true} />
      <FaveIcon
        refresh={getRequest}
        productId={data?.product?.id}
        fave={userFaves.includes(data?.product?.id)}
        className={classes.faveIcon}
      />
      <ProductImages image={data?.product?.image} loading={loading} />
      <div className={classes.pageContent}>
        <ProductHeader
          title={data?.product?.name}
          rating={data?.product?.ratingsAverage}
          trips={data?.product?.reviews.length}
          className={classes.header}
        />
        <ProductInfo product={data?.product} className={classes.features} />
        {/* <ProductFeatures
          product={product}
          className={classes.features}
        />
        <ProductFeatures
          product={product}
          className={classes.features}
        /> */}

        <HostInfo hostInfo={data?.product?.host} className={classes.host} />
        <ProductDescription
          description={data?.product?.description}
          features={data?.product?.features}
          className={classes.description}
        />
        <ProductReviews
          reviews={data?.product?.reviews}
          rating={data?.product?.ratingsAverage}
          className={classes.reviews}
        />

        <BookingColumn
          price={data?.product?.price}
          discount={data?.product?.discount}
          className={classes.booking}
          onConfirm={checkout}
          onFave={favouriteHandler}
        />

        <MobileConfirm
          price={data?.product?.price}
          discount={data?.product?.discount}
          onConfirm={checkout}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
