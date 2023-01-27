import React, { useEffect } from "react";
import classes from "./ProductPage.module.css";
import NavBar from "../../../components/NavBar/NavBar";

import Footer from "../../../components/Footer/Footer";
import ProductImages from "../ProductImages";
import ProductHeader from "../ProductHeader";
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import HostInfo from "../HostInfo";
import ProductDescription from "../ProductDescription";
import ProductReviews from "../ProductReviews/ProductReviews";
import BookingColumn from "../BookingColumn";
import MobileConfirm from "../MobileConfirm/MobileConfirm";
import store from "../../../store/store";
import configActions from "../../../store/configSlice";
import { useState } from "react";
import { productIcons } from "../../../config/icons";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import ProductInfo from "../ProductFeatures/ProductInfo";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../config/configParameters";
import FaveIcon from "../../searchResults/FaveIcon";

const ProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const product = useSelector((state) => state.config.value.currentProduct);
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
    console.log("adding fave", data?.product?.id);
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
    if (!data) {
      return getRequest();
    }
    // setProduct(data.product);
    store.dispatch(configActions.setCurrentProduct(data.product));
  }, [data, getRequest]);

  useEffect(() => {
    getRequest();
  }, [notification]);

  return (
    <div className={classesList}>
      <NavBar search={true} />
      <FaveIcon
        refresh={getRequest}
        productId={product?.id}
        fave={userFaves.includes(product?.id)}
        className={classes.faveIcon}
      />
      <ProductImages image={product?.image} />
      <div className={classes.pageContent}>
        <ProductHeader
          title={product?.name}
          rating={product?.ratingsAverage}
          trips={product?.reviews.length}
          className={classes.header}
        />
        <ProductInfo product={product} className={classes.features} />
        {/* <ProductFeatures
          product={product}
          className={classes.features}
        />
        <ProductFeatures
          product={product}
          className={classes.features}
        /> */}

        <HostInfo hostInfo={product?.host} className={classes.host} />
        <ProductDescription
          description={product?.description}
          features={product?.features}
          className={classes.description}
        />
        <ProductReviews
          reviews={product?.reviews}
          rating={product?.ratingsAverage}
          className={classes.reviews}
        />

        <BookingColumn
          price={product?.price}
          discount={product?.discount}
          className={classes.booking}
          onConfirm={checkout}
          onFave={favouriteHandler}
        />

        <MobileConfirm
          price={product?.price}
          discount={product?.discount}
          onConfirm={checkout}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
