// Main imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import classes from "./FrontPage.module.css";

// Components
import NavBar from "../../../components/NavBar/NavBar";
import Landing from "../Landing/Landing";
import CarouselSection from "../../../components/Carousel/CarouselSection";
import CarouselSlide from "../../../components/Carousel/CarouselSlide";
import SubtitleSection from "../../../components/TitleSection/TitleSection";
import Travelogue from "../../../components/Travelogue/Travelogue";
import FinalSection from "../../../components/FinalSection/FinalSection";
import Footer from "../../../components/Footer/Footer";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";

// State management
import store from "../../../store/store";
import queryActions from "../../../store/querySlice";

// Config
import {
  typeArray,
  brandsArray,
  activitiesArray,
  hostsArray,
  slidesArray,
} from "../../../config/typeArrays";

const FrontPage = () => {
  const navigate = useNavigate();

  const searchByType = (selected) => {
    store.dispatch(queryActions.reset());
    store.dispatch(queryActions.setType([selected]));
    navigate("/search");
  };

  return (
    <>
      <Backdrop />
      <NavBar />
      <Landing />
      <CarouselSection
        title="Browse by type"
        windows={5}
        tiles={typeArray}
        onSelect={(selected) => searchByType(selected)}
      />
      <CarouselSection
        windows={1}
        slides={slidesArray}
        className={classes.largerScreen}
      />
      <CarouselSlide
        className={classes.smallerScreen}
        image="formal"
        title="Find the perfect outfit "
        span="for that special occasion"
        paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
      />

      <CarouselSection
        title="Browse by brand"
        windows={6}
        tiles={brandsArray}
        onSelect={(selected) => searchByType(selected)}
      />

      <SubtitleSection
        main="Fuel your daydreams"
        submain="Get inspired by others who have taken advantage of our offerings."
        button="Explore
        Travelogues"
      />
      <Travelogue />
      <CarouselSection
        title="Browse by experience"
        windows={3}
        taller={true}
        tiles={activitiesArray}
      />
      <SubtitleSection main="Meet the hosts" />
      <CarouselSection
        title="Top hosts on Simpl."
        windows={3}
        hosts={hostsArray}
      />
      <FinalSection />
      <Footer />
    </>
  );
};

export default FrontPage;
