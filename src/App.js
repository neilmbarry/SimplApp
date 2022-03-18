import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import CarouselSection from "./components/Carousel/CarouselSection";
import CarouselTile from "./components/Carousel/CarouselTile";

import photo1 from "./img-compressed/tamara-bellis-mNZ-GvOQUUY-unsplash.jpg";
import photo2 from "./img-compressed/chantelle-taylor-KGR6BzW6k4w-unsplash.jpg";
import photo3 from "./img-compressed/hannah-skelly-ZddhWFwzEDo-unsplash.jpg";
import photo4 from "./img-compressed/jonathan-francisca-HY-Nr7GQs3k-unsplash.jpg";
import photo5 from "./img-compressed/tamara-bellis-0C2qrwkR1dI-unsplash.jpg";
import photo6 from "./img-compressed/tamara-bellis-uN1m9Ca0aqo-unsplash.jpg";
import photo7 from "./img-compressed/tamara-bellis-WdPfMcpeQas-unsplash.jpg";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <CarouselSection title="Browse by make" windows={5}>
        <CarouselTile title="Versace">
          <img src={photo1} alt="" />
        </CarouselTile>
        <CarouselTile title="Burberry">
          <img src={photo2} alt="" />
        </CarouselTile>
        <CarouselTile title="Ralph Lauren">
          <img src={photo3} alt="" />
        </CarouselTile>
        <CarouselTile title="Chanel">
          <img src={photo4} alt="" />
        </CarouselTile>
        <CarouselTile title="Gucci">
          <img src={photo5} alt="" />
        </CarouselTile>
        <CarouselTile title="Louis Vuitton">
          <img src={photo6} alt="" />
        </CarouselTile>
        <CarouselTile title="H&M">
          <img src={photo7} alt="" />
        </CarouselTile>
        <CarouselTile title="Versace">
          <img src={photo1} alt="" />
        </CarouselTile>
        <CarouselTile title="Burberry">
          <img src={photo2} alt="" />
        </CarouselTile>
        <CarouselTile title="Ralph Lauren">
          <img src={photo3} alt="" />
        </CarouselTile>
        <CarouselTile title="Chanel">
          <img src={photo4} alt="" />
        </CarouselTile>
        <CarouselTile title="Gucci">
          <img src={photo5} alt="" />
        </CarouselTile>
        <CarouselTile title="Louis Vuitton">
          <img src={photo6} alt="" />
        </CarouselTile>
        <CarouselTile title="H&M">
          <img src={photo7} alt="" />
        </CarouselTile>
      </CarouselSection>
    </>
  );
}

export default App;
