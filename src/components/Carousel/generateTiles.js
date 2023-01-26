import CarouselTile from "./CarouselTile";
import HostTile from "./HostTile";
import CarouselSlide from "./CarouselSlide";
import { Link } from "react-router-dom";

export const generateTiles = (tiles, windows, taller, width, userSelect) => {
  if (!tiles) return;
  const tileComponents = tiles?.map((tile, i) => {
    return (
      <CarouselTile
        picture={tile.image}
        title={tile.title}
        key={tile.image}
        fraction={windows}
        taller={taller}
        width={width}
        userSelect={userSelect}
      />
    );
  });
  const tileComponentsDuplicate = tiles?.map((tile, i) => {
    return (
      <CarouselTile
        picture={tile.image}
        title={tile.title}
        key={tile.image + "dupe"}
        fraction={windows}
        taller={taller}
        width={width}
        userSelect={userSelect}
      />
    );
  });
  const tileComponentsBefore = tiles?.map((tile, i) => {
    return (
      <CarouselTile
        picture={tile.image}
        title={tile.title}
        key={tile.image + "before"}
        fraction={windows}
        taller={taller}
        width={width}
        userSelect={userSelect}
      />
    );
  });
  return [
    ...tileComponentsBefore,
    ...tileComponents,
    ...tileComponentsDuplicate,
  ];
};

export const generateHostTiles = (hosts, windows, taller, width) => {
  if (!hosts) return;
  const tileComponents = hosts?.map((host, i) => {
    return (
      <Link to="/host" key={host.host.name}>
        <HostTile
          info={host.host}
          review={host.review}
          fraction={windows}
          width={width}
        />
      </Link>
    );
  });
  const tileComponentsDuplicate = hosts?.map((host, i) => {
    return (
      <Link to="/search" key={host.host.name + "dupe"}>
        <HostTile
          info={host.host}
          review={host.review}
          fraction={windows}
          width={width}
        />
      </Link>
    );
  });
  const tileComponentsBefore = hosts?.map((host, i) => {
    return (
      <Link to="/search" key={host.host.name + "before"}>
        <HostTile
          info={host.host}
          review={host.review}
          fraction={windows}
          width={width}
        />
      </Link>
    );
  });
  return [
    ...tileComponentsBefore,
    ...tileComponents,
    ...tileComponentsDuplicate,
  ];
};

export const generateSlides = (slides, windows, taller, width) => {
  if (!slides) return;
  const tileComponents = slides?.map((slide, i) => {
    return (
      <CarouselSlide
        image={slide.image}
        title={slide.title}
        span={slide.span}
        paragraph={slide.paragraph}
        windows={windows}
        key={slide.span}
        width={width}
      />
    );
  });
  const tileComponentsDuplicate = slides?.map((slide, i) => {
    return (
      <CarouselSlide
        image={slide.image}
        title={slide.title}
        span={slide.span}
        paragraph={slide.paragraph}
        windows={windows}
        key={slide.span + "dupe"}
        width={width}
      />
    );
  });
  const tileComponentsBefore = slides?.map((slide, i) => {
    return (
      <CarouselSlide
        image={slide.image}
        title={slide.title}
        span={slide.span}
        paragraph={slide.paragraph}
        windows={windows}
        key={slide.span + "before"}
        width={width}
      />
    );
  });

  return [
    ...tileComponentsBefore,
    ...tileComponents,
    ...tileComponentsDuplicate,
  ];
};
