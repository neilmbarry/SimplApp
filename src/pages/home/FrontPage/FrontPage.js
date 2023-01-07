import React from "react";
import classes from "./FrontPage.module.css";

import NavBar from "../../../components/NavBar/NavBar";

import Landing from "../Landing/Landing";

import CarouselSection from "../../../components/Carousel/CarouselSection";
import CarouselTile from "../../../components/Carousel/CarouselTile";
import CarouselSlide from "../../../components/Carousel/CarouselSlide";
import HostTile from "../../../components/Carousel/HostTile";

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

import tokyo from "../../../img-compressed/tokyo.jpg";
import paris from "../../../img-compressed/paris.jpg";
import la from "../../../img-compressed/la.jpg";
import london from "../../../img-compressed/london.jpg";
import sydney from "../../../img-compressed/sydney.jpg";
import toronto from "../../../img-compressed/toronto.jpg";
import hiking from "../../../img-compressed/hiking.jpg";
import dance from "../../../img-compressed/dance.jpg";
import run from "../../../img-compressed/runn.jpg";

import Travelogue from "../../../components/Travelogue/Travelogue";

import FinalSection from "../../../components/FinalSection/FinalSection";

import Footer from "../../../components/Footer/Footer";

const brandArray = [
  {
    title: "Versace",
    image: photo1,
  },
  {
    title: "Burberry",
    image: photo2,
  },
  {
    title: "Ralph Lauren",
    image: photo3,
  },
  {
    title: "Chanel",
    image: photo4,
  },
  {
    title: "Gucci",
    image: photo5,
  },
  {
    title: "Louis Vuitton",
    image: photo6,
  },
  {
    title: "H&M",
    image: photo7,
  },
];

const locationArray = [
  {
    title: "London",
    image: london,
  },
  {
    title: "Tokyo",
    image: tokyo,
  },
  {
    title: "Paris",
    image: paris,
  },
  {
    title: "Los Angeles",
    image: la,
  },
  {
    title: "Sydney",
    image: sydney,
  },
  {
    title: "Toronto",
    image: toronto,
  },
];

const FrontPage = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <>
      <NavBar />
      <Landing />
      <CarouselSection title="Browse by brand" windows={5} tiles={brandArray} />
      <CarouselSection windows={1}>
        <CarouselSlide
          image={formal}
          title="Find the perfect outfit "
          span="for that special occasion"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
        <CarouselSlide
          image={SlidePhoto}
          title="Find the perfect outfit "
          span="to conquer the world"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
        <CarouselSlide
          image={camping}
          title="Find the perfect outfit "
          span="for exploration"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
        <CarouselSlide
          image={winter}
          title="Find the perfect outfit "
          span="for the colder months"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
        <CarouselSlide
          image={formal}
          title="Find the perfect outfit "
          span="for that special occasion"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
        <CarouselSlide
          image={SlidePhoto}
          title="Find the perfect outfit "
          span="to conquer the world"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
        <CarouselSlide
          image={camping}
          title="Find the perfect outfit "
          span="for exploration"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
        <CarouselSlide
          image={winter}
          title="Find the perfect outfit "
          span="for the colder months"
          paragraph="Look your best in any situation, event or climate with a curated
          selection of vibrant collections."
        />
      </CarouselSection>
      <CarouselSection
        title="Browse by destination"
        windows={6}
        tiles={locationArray}
      />

      <SubtitleSection
        main="Fuel your daydreams"
        submain="Get inspired by others who have taken advantage of our offerings."
        button="Explore
        Travelogues"
      ></SubtitleSection>
      <Travelogue></Travelogue>
      {/* <Button text="Explore Travelogues" /> */}
      <CarouselSection title="Browse by experience" windows={3}>
        <CarouselTile
          picture={hiking}
          title="Hiking"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={dance}
          title="Dancing"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={run}
          title="Running"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={hiking}
          title="Hiking"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={dance}
          title="Dancing"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={run}
          title="Running"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={hiking}
          title="Hiking"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={dance}
          title="Dancing"
          fraction={3}
          taller={true}
        />
        <CarouselTile
          picture={run}
          title="Running"
          fraction={3}
          taller={true}
        />
      </CarouselSection>
      <SubtitleSection main="Meet the hosts" />
      <CarouselSection title="Top hosts on Simp" windows={3}>
        <HostTile
          fraction={3}
          picture={photo3}
          info={{ name: "Steph B.", trips: 19, joined: "Jan 2018" }}
          review={{
            rating: 5,
            review:
              "Great experience. Easy rental precess from picking up to dropping off. Very clean and spacious car.",
            name: "Nigel T.",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo1}
          info={{ name: "Amar C.", trips: 343, joined: "Sept 2018" }}
          review={{
            rating: 5,
            review:
              "Amar is going above and beyond expectations for this service. He is easy to communicate with!",
            name: "Andrew D.",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo4}
          info={{ name: "Warren T.", trips: 83, joined: "Nov 2015" }}
          review={{
            rating: 5,
            review:
              "Great experience. Easy rental precess from picking up to dropping off. Very clean and spacious car.",
            name: "Paul C.",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo2}
          info={{ name: "Sarah C.", trips: 43, joined: "Sept 2020" }}
          review={{
            rating: 5,
            review:
              "Great experience. Easy rental precess from picking up to dropping off. Very clean and spacious car.",
            name: "Neil Barry",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo1}
          info={{ name: "Amar C.", trips: 343, joined: "Sept 2018" }}
          review={{
            rating: 5,
            review:
              "Excellent expreience! Clean car and perfect for the trip. Thahk you!",
            name: "Neil Barry",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo3}
          info={{ name: "Steph B.", trips: 19, joined: "Jan 2018" }}
          review={{
            rating: 5,
            review:
              "Great experience. Easy rental precess from picking up to dropping off. Very clean and spacious car.",
            name: "Nigel T.",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo1}
          info={{ name: "Amar C.", trips: 343, joined: "Sept 2018" }}
          review={{
            rating: 5,
            review:
              "Amar is going above and beyond expectations for this service. He is easy to communicate with!",
            name: "Andrew D.",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo4}
          info={{ name: "Warren T.", trips: 83, joined: "Nov 2015" }}
          review={{
            rating: 5,
            review:
              "Great experience. Easy rental precess from picking up to dropping off. Very clean and spacious car.",
            name: "Paul C.",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo2}
          info={{ name: "Sarah C.", trips: 43, joined: "Sept 2020" }}
          review={{
            rating: 5,
            review:
              "Great experience. Easy rental precess from picking up to dropping off. Very clean and spacious car.",
            name: "Neil Barry",
            date: "Jul 2022",
          }}
        />
        <HostTile
          fraction={3}
          picture={photo1}
          info={{ name: "Amar C.", trips: 343, joined: "Sept 2018" }}
          review={{
            rating: 5,
            review:
              "Excellent expreience! Clean car and perfect for the trip. Thahk you!",
            name: "Neil Barry",
            date: "Jul 2022",
          }}
        />
      </CarouselSection>
      <FinalSection />
      <Footer />
    </>
  );
};

export default FrontPage;
