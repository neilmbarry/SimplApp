import React, { useState } from "react";
import classes from "./AddProductPage.module.css";

import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";

import FormSection from "./FormSection";
import GarmentCategory from "../formCategories/GarmentCategory";
import DetailsCategory from "../formCategories/DetailsCategory";
import PhotosCategory from "../formCategories/PhotosCategory";
import Button from "../../../components/UI/Button";

const AddProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const [sectionOpen, setSectionOpen] = useState(null);
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
  return (
    <div className={classesList}>
      <NavBar search={false} />
      <div className={classes.pageContainer}>
        <h2>List your garment</h2>
        <form action="" className={classes.form} onSubmit={test}>
          <FormSection
            isOpen={sectionOpen === 1}
            toggle={() => sectionChangeHandler(1)}
            title="Your Garment"
            height={500}
          >
            <GarmentCategory onNext={() => sectionChangeHandler(2)} />
          </FormSection>
          <FormSection
            isOpen={sectionOpen === 2}
            toggle={() => sectionChangeHandler(2)}
            title="Garment details"
            height={680}
          >
            <DetailsCategory onNext={() => sectionChangeHandler(3)} />
          </FormSection>
          <FormSection
            isOpen={sectionOpen === 3}
            toggle={() => sectionChangeHandler(3)}
            title="Garment photo"
            height={390}
          >
            <PhotosCategory onNext={() => sectionChangeHandler(4)} />
          </FormSection>
          <FormSection
            isOpen={sectionOpen === 4}
            toggle={() => sectionChangeHandler(4)}
            title="Additional information"
            height={200}
          ></FormSection>
        </form>
        <Button text="Submit" className={classes.button} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProductPage;
