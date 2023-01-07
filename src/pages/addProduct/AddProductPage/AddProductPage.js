import React, { useState } from "react";
import classes from "./AddProductPage.module.css";

import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";

import FormSection from "./FormSection";

const AddProductPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const [sectionOpen, setSectionOpen] = useState(null);
  const sectionChangeHandler = (section) => {
    if (section === sectionOpen) {
      return setSectionOpen(null);
    }
    setSectionOpen(section);
  };
  return (
    <div className={classesList}>
      <NavBar search={true}></NavBar>
      <form action="" className={classes.form}>
        <h2>List your car</h2>
        <FormSection
          isOpen={sectionOpen === "car"}
          toggle={() => sectionChangeHandler("car")}
          title="Your Car"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa qui eum
          perferendis provident quod nihil quibusdam est libero numquam,
          blanditiis incidunt at quasi similique quia mollitia praesentium.
          Voluptatem, id cumque.
        </FormSection>
        <FormSection
          isOpen={sectionOpen === "hand"}
          toggle={() => sectionChangeHandler("hand")}
          title="Your Car"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque
          animi libero rerum distinctio, ad debitis dolorem? Asperiores quaerat
          earum optio velit debitis, aperiam molestiae delectus blanditiis
          voluptate error maiores molestias laborum nostrum cupiditate
          inventore, aliquam quibusdam, aspernatur itaque officia distinctio?
          Totam non nemo incidunt, nulla amet assumenda veniam ad molestias hic
          ipsum architecto sequi nihil adipisci error optio?
        </FormSection>
        <FormSection
          isOpen={sectionOpen === "seast"}
          toggle={() => sectionChangeHandler("seast")}
          title="Your Car"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi debitis
          exercitationem natus accusantium quos quo aliquam sapiente, saepe aut
          repellat ad magnam corrupti.
        </FormSection>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddProductPage;
