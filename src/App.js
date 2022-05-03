import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import CarouselSection from "./components/Carousel/CarouselSection";
import CarouselTile from "./components/Carousel/CarouselTile";
import CarouselSlide from "./components/Carousel/CarouselSlide";
import TitleSection from "./components/TitleSection/TitleSection";
import Button from "./components/UI/Button";

import photo1 from "./img-compressed/tamara-bellis-mNZ-GvOQUUY-unsplash.jpg";
import photo2 from "./img-compressed/chantelle-taylor-KGR6BzW6k4w-unsplash.jpg";
import photo3 from "./img-compressed/hannah-skelly-ZddhWFwzEDo-unsplash.jpg";
import photo4 from "./img-compressed/jonathan-francisca-HY-Nr7GQs3k-unsplash.jpg";
import photo5 from "./img-compressed/tamara-bellis-0C2qrwkR1dI-unsplash.jpg";
import photo6 from "./img-compressed/tamara-bellis-uN1m9Ca0aqo-unsplash.jpg";
import photo7 from "./img-compressed/tamara-bellis-WdPfMcpeQas-unsplash.jpg";
import hanger from "./img/milada-vigerova-p8Drpg_duLw-unsplash.jpg";
import tokyo from "./img-compressed/tokyo.jpg";
import paris from "./img-compressed/paris.jpg";
import la from "./img-compressed/la.jpg";
import london from "./img-compressed/london.jpg";
import sydney from "./img-compressed/sydney.jpg";
import toronto from "./img-compressed/toronto.jpg";
import hiking from "./img-compressed/hiking.jpg";
import dance from "./img-compressed/dance.jpg";
import run from "./img-compressed/runn.jpg";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <CarouselSection title="Browse by brand" windows={5}>
        <CarouselTile title="Versace" fraction={5}>
          <img src={photo1} alt="" />
        </CarouselTile>
        <CarouselTile title="Burberry" fraction={5}>
          <img src={photo2} alt="" />
        </CarouselTile>
        <CarouselTile title="Ralph Lauren" fraction={5}>
          <img src={photo3} alt="" />
        </CarouselTile>
        <CarouselTile title="Chanel" fraction={5}>
          <img src={photo4} alt="" />
        </CarouselTile>
        <CarouselTile title="Gucci" fraction={5}>
          <img src={photo5} alt="" />
        </CarouselTile>
        <CarouselTile title="Louis Vuitton" fraction={5}>
          <img src={photo6} alt="" />
        </CarouselTile>
        <CarouselTile title="H&M" fraction={5}>
          <img src={photo7} alt="" />
        </CarouselTile>
        <CarouselTile title="Versace" fraction={5}>
          <img src={photo1} alt="" />
        </CarouselTile>
        <CarouselTile title="Burberry" fraction={5}>
          <img src={photo2} alt="" />
        </CarouselTile>
        <CarouselTile title="Ralph Lauren" fraction={5}>
          <img src={photo3} alt="" />
        </CarouselTile>
        <CarouselTile title="Chanel" fraction={5}>
          <img src={photo4} alt="" />
        </CarouselTile>
        <CarouselTile title="Gucci" fraction={5}>
          <img src={photo5} alt="" />
        </CarouselTile>
        <CarouselTile title="Louis Vuitton" fraction={5}>
          <img src={photo6} alt="" />
        </CarouselTile>
        <CarouselTile title="H&M" fraction={5}>
          <img src={photo7} alt="" />
        </CarouselTile>
      </CarouselSection>
      <CarouselSection windows={1}>
        <CarouselSlide />
      </CarouselSection>
      <CarouselSection title="Browse by destination" windows={6}>
        <CarouselTile title="London" fraction={6}>
          <img src={london} alt="" />
        </CarouselTile>
        <CarouselTile title="Tokyo" fraction={6}>
          <img src={tokyo} alt="" />
        </CarouselTile>
        <CarouselTile title="Paris" fraction={6}>
          <img src={paris} alt="" />
        </CarouselTile>
        <CarouselTile title="Los Angeles" fraction={6}>
          <img src={la} alt="" />
        </CarouselTile>
        <CarouselTile title="Sydney" fraction={6}>
          <img src={sydney} alt="" />
        </CarouselTile>
        <CarouselTile title="Toronto" fraction={6}>
          <img src={toronto} alt="" />
        </CarouselTile>
      </CarouselSection>
      <TitleSection
        main="Fuel your daydreams"
        submain="Stoke your wanderlust with some dreamy photo chronicles of road trip adventures."
        button="Explore Travelogues"
      />
      {/* <Button text="Explore Travelogues" /> */}
      <CarouselSection title="Browse by experience" windows={3}>
        <CarouselTile title="Hiking" fraction={3}>
          <img src={hiking} alt="" />
        </CarouselTile>
        <CarouselTile title="Clubbing" fraction={3}>
          <img src={dance} alt="" />
        </CarouselTile>
        <CarouselTile title="Running" fraction={3}>
          <img src={run} alt="" />
        </CarouselTile>
      </CarouselSection>
      <TitleSection main="Meet the hosts" submain=" " />
      <CarouselSection title="Top hosts on Simp" windows={3}>
        <CarouselTile title="London" fraction={3}>
          <img src={london} alt="" />
        </CarouselTile>
        <CarouselTile title="Tokyo" fraction={3}>
          <img src={tokyo} alt="" />
        </CarouselTile>
        <CarouselTile title="Paris" fraction={3}>
          <img src={paris} alt="" />
        </CarouselTile>
        <CarouselTile title="Los Angeles" fraction={3}>
          <img src={la} alt="" />
        </CarouselTile>
        <CarouselTile title="Sydney" fraction={3}>
          <img src={sydney} alt="" />
        </CarouselTile>
        <CarouselTile title="Toronto" fraction={3}>
          <img src={toronto} alt="" />
        </CarouselTile>
      </CarouselSection>
    </>
  );
}

export default App;
