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

// const productTemplate? = {
//   image: "jacket2",
//   name: "Louis Vuitton Grey Blazer",
//   rating: 4.97,
//   trips: 36,
//   features: ["Re-chargeable", "4 pockets", "1 seat"],
//   // host: {
//   //   name: "Neil B.",
//   //   joined: "Sept 2013",
//   //   rating: 5,
//   //   trips: 258,
//   //   allStar: true,
//   //   trained: true,
//   //   image: "runner",
//   // },
//   description:
//     "*FREE SUPERCHARGING AT ANY TESLA SUPERCHARGERS*    This is one of the very rare Tesla on here that offer you guys free supercharging.*Corona virus update - all cars will be sterilized with 30 min. before and after each rental!",
//   // reviews: [
//   //   {
//   //     rating: 5,
//   //     reviewer: "Neil B.",
//   //     review:
//   //       "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
//   //     image: "man1",
//   //     dateAdded: "June 20, 2022",
//   //   },
//   //   {
//   //     rating: 5,
//   //     reviewer: "Neil B.",
//   //     review:
//   //       "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
//   //     image: "man2",
//   //     dateAdded: "June 20, 2022",
//   //   },
//   //   {
//   //     rating: 5,
//   //     reviewer: "Neil B.",
//   //     dateAdded: "June 20, 2022",
//   //     review:
//   //       "Amazing car with an amazing host no problems at all car was super clean fun and luxury at the same pace host was fantastic with communication will defiantly rent again. Thank you",
//   //     image: "man3",
//   //   },
//   // ],
//   reviews: [],
//   price: 729,
//   discount: {
//     type: "3+ day",
//     amount: 19,
//   },
// };

const ProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const [productTemplate, setProductTemplate] = useState(null);

  const checkout = () => {
    store.dispatch(configActions.setModal("checkout"));
  };

  const params = useParams();

  const { loading, error, data, getRequest } = useFetch({
    url: `http://127.0.0.1:8000/api/v1/products/${params.slug}`,
  });

  useEffect(() => {
    if (!data) {
      return getRequest();
    }
    setProductTemplate(data.product);
  }, [data, getRequest]);

  return (
    <div className={classesList}>
      <NavBar search={true} />
      <ProductImages image={productTemplate?.image} />
      <div className={classes.pageContent}>
        <ProductHeader
          title={productTemplate?.name}
          rating={productTemplate?.rating}
          trips={productTemplate?.trips}
          className={classes.header}
        />
        <ProductInfo product={productTemplate} className={classes.features} />
        {/* <ProductFeatures
          product={productTemplate}
          className={classes.features}
        />
        <ProductFeatures
          product={productTemplate}
          className={classes.features}
        /> */}

        <HostInfo hostInfo={productTemplate?.host} className={classes.host} />
        <ProductDescription
          description={productTemplate?.description}
          features={productTemplate?.features}
          className={classes.description}
        />
        <ProductReviews
          reviews={productTemplate?.reviews}
          rating={productTemplate?.rating}
          className={classes.reviews}
        />

        <BookingColumn
          price={productTemplate?.price}
          discount={productTemplate?.discount}
          className={classes.booking}
          onConfirm={checkout}
        />

        <MobileConfirm
          price={productTemplate?.price}
          discount={productTemplate?.discount}
          onConfirm={checkout}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
