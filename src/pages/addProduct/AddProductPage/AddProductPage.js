import React, { useState } from "react";
import classes from "./AddProductPage.module.css";

import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";

import FormSection from "./FormSection";
import GarmentCategory from "../formCategories/GarmentCategory";
import DetailsCategory from "../formCategories/DetailsCategory";
import PhotosCategory from "../formCategories/PhotosCategory";
import PricingCategory from "../formCategories/PricingCategory";
import Button from "../../../components/UI/Button";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import store from "../../../store/store";
import configActions from "../../../store/configSlice";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../config/configParameters";

const AddProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const [sectionOpen, setSectionOpen] = useState(1);

  const token = useSelector((state) => state.config.value.token);
  const { loading, error, data, postRequest } = useFetch({
    url: BASE_URL + "products",
  });

  const sectionChangeHandler = (section) => {
    if (section === sectionOpen) {
      return setSectionOpen(null);
    }
    setSectionOpen(section);
  };
  const test = (e) => {
    e.preventDefault();
  };

  const product = useSelector((state) => state.newProduct.value);

  const submitHandler = () => {
    const body = JSON.stringify(product);
    postRequest(body, token);
  };

  useEffect(() => {
    if (data?.status === "success") {
      store.dispatch(configActions.setNotification("Product Added"));
    }
    if (error) {
      console.warn(data);
      store.dispatch(configActions.setNotification("Error"));
    }
  }, [error, data]);

  if (!token) {
    store.dispatch(configActions.setNotification("You must be logged in"));
    store.dispatch(configActions.setModal("signup"));
    return <Navigate to="/" />;
  }

  return (
    <div className={classesList}>
      <NavBar search={false} />
      <div className={classes.pageContainer}>
        <div className={classes.titles}>
          <h2>List your garment</h2>
          <h5 className={classes.subtitle}>{sectionOpen} of 8</h5>
        </div>
        <div className={classes.form} onSubmit={test}>
          <FormSection
            isOpen={sectionOpen === 1}
            toggle={() => sectionChangeHandler(1)}
            title="Your Garment"
            height={330}
          >
            <GarmentCategory onPage={(page) => sectionChangeHandler(page)} />
          </FormSection>
          <FormSection
            isOpen={sectionOpen === 2}
            toggle={() => sectionChangeHandler(2)}
            title="Garment details"
            height={490}
          >
            <DetailsCategory onPage={(page) => sectionChangeHandler(page)} />
          </FormSection>
          <FormSection
            isOpen={sectionOpen === 3}
            toggle={() => sectionChangeHandler(3)}
            title="Garment photo"
            height={300}
          >
            <PhotosCategory onPage={(page) => sectionChangeHandler(page)} />
          </FormSection>

          <FormSection
            isOpen={sectionOpen === 4}
            toggle={() => sectionChangeHandler(4)}
            title="Pricing"
            height={170}
          >
            <PricingCategory />
          </FormSection>
        </div>
        <Button
          text={loading ? "loading" : "Submit"}
          className={classes.button}
          onClick={submitHandler}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProductPage;
