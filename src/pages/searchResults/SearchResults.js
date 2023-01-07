import React from "react";
import classes from "./SearchResults.module.css";
import photo1 from "../../img-compressed/tamara-bellis-mNZ-GvOQUUY-unsplash.jpg";
import photo2 from "../../img-compressed/chantelle-taylor-KGR6BzW6k4w-unsplash.jpg";
import photo3 from "../../img-compressed/hannah-skelly-ZddhWFwzEDo-unsplash.jpg";
import photo4 from "../../img-compressed/jonathan-francisca-HY-Nr7GQs3k-unsplash.jpg";
import photo5 from "../../img-compressed/tamara-bellis-0C2qrwkR1dI-unsplash.jpg";
import photo6 from "../../img-compressed/tamara-bellis-uN1m9Ca0aqo-unsplash.jpg";
import photo7 from "../../img-compressed/tamara-bellis-WdPfMcpeQas-unsplash.jpg";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Results from "./Results";
import Result from "./Result";
import Map from "./Map";

const SearchResults = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  return (
    <div className={classesList}>
      <SearchBar />
      <FilterBar />
      <div className={classes.mainPage}>
        <Results>
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: photo6,
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Pink Sleeved Dress",
              rating: 4.98,
              trips: 68,
              image: photo1,
              price: 159,
              oldPrice: 205,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Cream Dress",
              rating: 4.92,
              trips: 78,
              image: photo3,
              price: 125,
              oldPrice: 149,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Grey Blazer",
              rating: 4.78,
              trips: 21,
              image: photo4,
              price: 199,
              // oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: photo5,
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: photo6,
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: photo1,
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: photo3,
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: photo4,
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: photo5,
              price: 199,
              oldPrice: 225,
            }}
          />
        </Results>
        <Map />
      </div>
    </div>
  );
};

export default SearchResults;
