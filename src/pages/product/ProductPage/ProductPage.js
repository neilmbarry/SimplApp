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

const ProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const product = useSelector((state) => state.config.value.currentProduct);
  const token = useSelector((state) => state.config.value.token);

  const params = useParams();

  const { loading, error, data, getRequest } = useFetch({
    url: `${BASE_URL}products/${params.slug}`,
  });

  const checkout = () => {
    if (!token) {
      return store.dispatch(configActions.setModal("signup"));
    }

    store.dispatch(configActions.setModal("checkout"));
  };

  console.log(product);

  useEffect(() => {
    if (!data) {
      return getRequest();
    }
    // setProduct(data.product);
    store.dispatch(configActions.setCurrentProduct(data.product));
  }, [data, getRequest]);

  return (
    <div className={classesList}>
      <NavBar search={true} />
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
