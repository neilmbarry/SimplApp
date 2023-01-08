import CarouselTile from "./CarouselTile";
import HostTile from "./HostTile";
import CarouselSlide from "./CarouselSlide";

export const generateTiles = (tiles, windows, taller) => {
  if (!tiles) return;
  const tileComponents = tiles?.map((tile, i) => {
    return (
      <CarouselTile
        picture={tile.image}
        title={tile.title}
        key={tile.title}
        fraction={windows}
        taller={taller}
      />
    );
  });
  const tileComponentsDuplicate = tiles?.map((tile, i) => {
    return (
      <CarouselTile
        picture={tile.image}
        title={tile.title}
        key={tile.title + "dupe"}
        fraction={windows}
        taller={taller}
      />
    );
  });
  const tileComponentsBefore = tiles?.map((tile, i) => {
    return (
      <CarouselTile
        picture={tile.image}
        title={tile.title}
        key={tile.title + "before"}
        fraction={windows}
        taller={taller}
      />
    );
  });
  return [
    ...tileComponentsBefore,
    ...tileComponents,
    ...tileComponentsDuplicate,
  ];
};

export const generateHostTiles = (hosts, windows, taller) => {
  if (!hosts) return;
  const tileComponents = hosts?.map((host, i) => {
    return (
      <HostTile
        info={host.host}
        review={host.review}
        key={host.host.name}
        fraction={windows}
      />
    );
  });
  const tileComponentsDuplicate = hosts?.map((host, i) => {
    return (
      <HostTile
        info={host.host}
        review={host.review}
        key={host.host.name + "dupe"}
        fraction={windows}
      />
    );
  });
  const tileComponentsBefore = hosts?.map((host, i) => {
    return (
      <HostTile
        info={host.host}
        review={host.review}
        key={host.host.name + "before"}
        fraction={windows}
      />
    );
  });
  return [
    ...tileComponentsBefore,
    ...tileComponents,
    ...tileComponentsDuplicate,
  ];
};

export const generateSlides = (slides, windows, taller) => {
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
      />
    );
  });

  return [
    ...tileComponentsBefore,
    ...tileComponents,
    ...tileComponentsDuplicate,
  ];
};
