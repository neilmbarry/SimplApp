import CarouselTile from "./CarouselTile";
import HostTile from "./HostTile";
import CarouselSlide from "./CarouselSlide";

export const generateTiles = (tiles, windows, taller, width) => {
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
      <HostTile
        info={host.host}
        review={host.review}
        key={host.host.name}
        fraction={windows}
        width={width}
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
        width={width}
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
