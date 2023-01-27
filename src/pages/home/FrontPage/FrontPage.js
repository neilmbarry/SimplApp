import React from "react";
import classes from "./FrontPage.module.css";

import NavBar from "../../../components/NavBar/NavBar";

import Landing from "../Landing/Landing";

import CarouselSection from "../../../components/Carousel/CarouselSection";
import CarouselSlide from "../../../components/Carousel/CarouselSlide";
import SubtitleSection from "../../../components/TitleSection/TitleSection";
import Travelogue from "../../../components/Travelogue/Travelogue";
import FinalSection from "../../../components/FinalSection/FinalSection";
import Footer from "../../../components/Footer/Footer";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
import { useNavigate } from "react-router-dom";
import store from "../../../store/store";

import queryActions from "../../../store/querySlice";

const typeArray = [
  {
    title: "Shirts",
    image: "shirt2",
    type: "Shirt",
  },
  {
    title: "Pants",
    image: "pants",
    type: "Pants",
  },
  {
    title: "Dresses",
    image: "dress2",
    type: "Dress",
  },
  {
    title: "Shoes",
    image: "shoes2",
    type: "Shoes",
  },
  {
    title: "Coats",
    image: "jacket2",
    type: "Jacket",
  },
  {
    title: "Sports",
    image: "sport2",
    type: "Sport",
  },
  {
    title: "Pajamas",
    image: "pajama1",
    type: "Pajama",
  },
];

const brandsArray = [
  {
    title: "Nike",
    image: "shoes1",
  },
  {
    title: "Louis Vuitton",
    image: "louis",
  },
  {
    title: "Gucci",
    image: "gucci",
  },
  {
    title: "Adidas",
    image: "shirt8",
  },
  {
    title: "Lululemon",
    image: "lululemon",
  },
  {
    title: "Prada",
    image: "prada",
  },
];

const activitiesArray = [
  {
    image: "hiking",
    title: "Outdoors",
  },
  {
    image: "formal",
    title: "Formal",
  },
  {
    image: "dance",
    title: "Dancing",
  },
  {
    image: "runner",
    title: "Sport",
  },
  {
    image: "swim",
    title: "Swimming",
  },
  {
    image: "pajama1",
    title: "Casual",
  },
  {
    image: "winter",
    title: "Winter",
  },
];

const hostsArray = [
  {
    host: {
      image: "woman2",
      name: "Sarah C.",
      trips: 32,
      joined: "Sept 2020",
    },
    review: {
      rating: 5,
      review:
        "Great experience. Easy rental process from picking up to dropping off. Very clean and spacious car.",
      reviewer: "Neil B.",
      date: "Jul 2022",
    },
  },

  {
    host: {
      image: "woman4",
      name: "Steph B.",
      trips: 19,
      joined: "Jan 2018",
    },
    review: {
      rating: 5,
      review:
        "Great experience. Easy rental precess from picking up to dropping off. Very clean and spacious car.",
      reviewer: "Neil B.",
      date: "Jul 2022",
    },
  },

  {
    host: {
      image: "man5",
      name: "Amar C.",
      trips: 342,
      joined: "Sept 2018",
    },
    review: {
      rating: 5,
      review:
        "Amar went above and beyond expectations for this service. He is easy to communicate with!",
      reviewer: "Andrew D.",
      date: "Jul 2022",
    },
  },
  {
    host: {
      image: "man1",
      name: "Warren T.",
      trips: 84,
      joined: "Nov 2015",
    },
    review: {
      rating: 5,
      review:
        "Great experience. Easy rental process from picking up to dropping off. Very clean and spacious car.",
      reviewer: "Paul C.",
      date: "Jul 2022",
    },
  },
];

const slidesArray = [
  {
    image: "formal",
    title: "Find the perfect outfit",
    span: "for that special occasion",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
  {
    image: "jacketbrown",
    title: "Find the perfect outfit",
    span: "to conquer the world",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
  {
    image: "camping",
    title: "Find the perfect outfit",
    span: "for exploration",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
  {
    image: "winter",
    title: "Find the perfect outfit",
    span: "for the colder months",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
];

const FrontPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const navigate = useNavigate();

  const navTo = (selected) => {
    console.log("navigating");
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
        onClick={navTo}
        onSelect={(selected) => navTo(selected)}
      />
      <CarouselSection
        windows={1}
        slides={slidesArray}
        className={classes.largerScreen}
        onClick={navTo}
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
        onClick={navTo}
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
        onClick={navTo}
      />
      <SubtitleSection main="Meet the hosts" />
      <CarouselSection
        title="Top hosts on Simpl."
        windows={3}
        hosts={hostsArray}
        onClick={navTo}
      />
      <FinalSection />
      <Footer />
    </>
  );
};

export default FrontPage;
