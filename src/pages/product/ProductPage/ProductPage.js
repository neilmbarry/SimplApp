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

  const token = useSelector((state) => state.config.value.token);
  const refresh = useSelector((state) => state.config.value.refresh);
  const params = useParams();

  const userFaves = useSelector((state) => state.config.value.userFaves);
  const { loading, error, data, getRequest } = useFetch({
    url: `${BASE_URL}products/${params.slug}`,
  });

  const checkout = () => {
    if (!token) {
      return store.dispatch(configActions.setModal("signup"));
    }
    store.dispatch(configActions.setModal("checkout"));
  };

  useEffect(() => {
    getRequest();
  }, [refresh]);

  useEffect(() => {
    if (data.status === "success") {
      console.log("success getting data");
      store.dispatch(configActions.setCurrentProduct(data.product));
    }
    if (data.status === "fail" || data.status === "error") {
      console.log("error getting data");
      store.dispatch(configActions.setNotification(error.message));
    }
  }, [data, error]);

  return (
    <div className={classesList}>
      <NavBar search={true} />
      <FaveIcon
        productId={data?.product?.id}
        fave={userFaves.includes(data?.product?.id)}
        className={classes.faveIcon}
      />
      <ProductImages image={data?.product?.image} loading={loading} />
      <div className={classes.pageContent}>
        <ProductHeader product={data?.product} className={classes.header} />
        <ProductInfo product={data?.product} className={classes.features} />
        <HostInfo hostInfo={data?.product?.host} className={classes.host} />
        <ProductDescription
          product={data?.product}
          className={classes.description}
        />
        <ProductReviews
          reviews={data?.product?.reviews}
          rating={data?.product?.ratingsAverage}
          className={classes.reviews}
        />

        <BookingColumn
          product={data?.product}
          className={classes.booking}
          onConfirm={checkout}
        />
        <MobileConfirm product={data?.product} onConfirm={checkout} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
