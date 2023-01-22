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

const AddProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const [sectionOpen, setSectionOpen] = useState(1);
  const sectionChangeHandler = (section) => {
    if (section === sectionOpen) {
      return setSectionOpen(null);
    }
    setSectionOpen(section);
  };
  const test = (e) => {
    e.preventDefault();
    console.log("test");
  };

  const product = useSelector((state) => state.newProduct.value);

  const submitHandler = () => {
    const JsonString = JSON.stringify(product);
    console.log(JsonString, product);
  };

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
            height={320}
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
          text="Submit"
          className={classes.button}
          onClick={submitHandler}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProductPage;
