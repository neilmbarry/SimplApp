import React from "react";
import classes from "./FrontPage.module.css";

import NavBar from "../../../components/NavBar/NavBar";

import Landing from "../Landing/Landing";

import CarouselSection from "../../../components/Carousel/CarouselSection";

import CarouselSlide from "../../../components/Carousel/CarouselSlide";

import SubtitleSection from "../../../components/TitleSection/TitleSection";

import SlidePhoto from "../../../img-compressed/test.jpg";
import formal from "../../../img-compressed/formal.jpg";
import winter from "../../../img-compressed/winter.jpg";
import camping from "../../../img-compressed/camping.jpg";

import photo1 from "../../../img-compressed/tamara-bellis-mNZ-GvOQUUY-unsplash.jpg";
import photo2 from "../../../img-compressed/chantelle-taylor-KGR6BzW6k4w-unsplash.jpg";
import photo3 from "../../../img-compressed/hannah-skelly-ZddhWFwzEDo-unsplash.jpg";
import photo4 from "../../../img-compressed/jonathan-francisca-HY-Nr7GQs3k-unsplash.jpg";
import photo5 from "../../../img-compressed/tamara-bellis-0C2qrwkR1dI-unsplash.jpg";
import photo6 from "../../../img-compressed/tamara-bellis-uN1m9Ca0aqo-unsplash.jpg";
import photo7 from "../../../img-compressed/tamara-bellis-WdPfMcpeQas-unsplash.jpg";

import shirtBlue from "../../../img-compressed/shirt-blue-3.jpg";
import swim from "../../../img-compressed/swim.jpg";
import pants from "../../../img-compressed/pants.jpg";
import pajama from "../../../img-compressed/pajama.jpg";
import sport from "../../../img-compressed/sport.jpg";
import shoes from "../../../img-compressed/shoes.jpg";
import dress from "../../../img-compressed/dress.jpg";

import prada from "../../../img-compressed/prada.jpg";
import nike from "../../../img-compressed/nike.jpg";
import lululemon from "../../../img-compressed/lululemon.jpg";
import adidas from "../../../img-compressed/adidas.jpg";
import gucci from "../../../img-compressed/gucci.jpg";
import louis from "../../../img-compressed/louis.jpg";

import hiking from "../../../img-compressed/hiking.jpg";
import dance from "../../../img-compressed/dance.jpg";
import run from "../../../img-compressed/runn.jpg";

import Travelogue from "../../../components/Travelogue/Travelogue";

import FinalSection from "../../../components/FinalSection/FinalSection";

import Footer from "../../../components/Footer/Footer";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";

const brandArray = [
  {
    title: "Shirts",
    image: shirtBlue,
  },
  {
    title: "Pants",
    image: pants,
  },
  {
    title: "Dresses",
    image: dress,
  },
  {
    title: "Shoes",
    image: shoes,
  },
  {
    title: "Swimwear",
    image: swim,
  },
  {
    title: "Sports",
    image: sport,
  },
  {
    title: "Pajamas",
    image: pajama,
  },
];

const locationArray = [
  {
    title: "Nike",
    image: nike,
  },
  {
    title: "Louis Vuitton",
    image: louis,
  },
  {
    title: "Gucci",
    image: gucci,
  },
  {
    title: "Adidas",
    image: adidas,
  },
  {
    title: "Lululemon",
    image: lululemon,
  },
  {
    title: "Prada",
    image: prada,
  },
];

const activitiesArray = [
  {
    image: hiking,
    title: "Formal",
  },
  {
    image: dance,
    title: "Dancing",
  },
  {
    image: run,
    title: "Sport",
  },
  {
    image: hiking,
    title: "Swimming",
  },
  {
    image: dance,
    title: "Casual",
  },
  {
    image: run,
    title: "Winter",
  },
];

const hostsArray = [
  {
    host: {
      image: photo2,
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
      image: photo3,
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
      image: photo1,
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
      image: photo4,
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
    image: formal,
    title: "Find the perfect outfit",
    span: "for that special occasion",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
  {
    image: SlidePhoto,
    title: "Find the perfect outfit",
    span: "to conquer the world",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
  {
    image: camping,
    title: "Find the perfect outfit",
    span: "for exploration",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
  {
    image: winter,
    title: "Find the perfect outfit",
    span: "for the colder months",
    paragraph:
      "Look your best in any situation , event or climate with a curated selection of vibrant collections.",
  },
];

const FrontPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <>
      <Backdrop />
      <NavBar />
      <Landing />
      <CarouselSection title="Browse by type" windows={5} tiles={brandArray} />
      <CarouselSection
        windows={1}
        slides={slidesArray}
        className={classes.largerScreen}
      />
      <CarouselSlide
        className={classes.smallerScreen}
        image={formal}
        title="Find the perfect outfit "
        span="for that special occasion"
        paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
      />

      <CarouselSection
        title="Browse by brand"
        windows={6}
        tiles={locationArray}
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
