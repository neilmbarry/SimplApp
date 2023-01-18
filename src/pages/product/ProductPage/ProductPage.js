import React from "react";
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

const productTemplate = {
  image: "blazer",
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
    image: "runner",
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
  ],
  price: 729,
  discount: {
    type: "3+ day",
    amount: 19,
  },
};

const ProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const checkout = () => {
    store.dispatch(configActions.setModal("checkout"));
  };

  return (
    <div className={classesList}>
      <NavBar search={true} />
      <ProductImages image={productTemplate.image} />
      <div className={classes.pageContent}>
        <ProductHeader
          title={productTemplate.name}
          rating={productTemplate.rating}
          trips={productTemplate.trips}
          className={classes.header}
        />
        <ProductFeatures
          features={productTemplate.features}
          className={classes.features}
        />
        <HostInfo hostInfo={productTemplate.host} className={classes.host} />
        <ProductDescription
          description={productTemplate.description}
          features={productTemplate.features}
          className={classes.description}
        />
        <ProductReviews
          reviews={productTemplate.reviews}
          rating={productTemplate.rating}
          className={classes.reviews}
        />

        <BookingColumn
          price={productTemplate.price}
          discount={productTemplate.discount}
          className={classes.booking}
          onConfirm={checkout}
        />

        <MobileConfirm
          price={productTemplate.price}
          discount={productTemplate.discount.amount}
          onConfirm={checkout}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
