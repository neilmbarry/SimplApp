import React from "react";
import classes from "./SearchResults.module.css";

import Backdrop from "../../components/UI/Backdrop/Backdrop";

import SearchBar from "./SearchBar";
import FilterBar from "./Filter/FilterBar";

import Results from "./Results";
import Result from "./Result";
import Map from "./Map";
import store from "../../store/store";
import configActions from "../../store/configSlice";
import SearchMobile from "../../components/Search/SearchMobile";
import { useSelector } from "react-redux";
import { useState } from "react";
import MapFilterButton from "./MapFilterButton";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../config/configParameters";
import { useEffect } from "react";

const SearchResults = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const toggleSearch = () => {
    store.dispatch(configActions.toggleSearch());
  };

  const [showMap, setShowMap] = useState(false);
  const [results, setResults] = useState([]);

  const showFilters = () => {
    store.dispatch(configActions.setModal("filter"));
  };
  const { loading, error, data, getRequest } = useFetch({
    url: BASE_URL + "products",
  });

  const resultsJSX = data?.products.map((res) => {
    return (
      <Result
        key={res.slug}
        info={{
          name: res.name,
          rating: res.rating,
          trips: res.trips,
          image: res.image,
          price: res.price,
          oldPrice: "to be changed",
          slug: res.slug,
          discount: res.discount,
        }}
      />
    );
  });

  const search = useSelector((state) => state.config.value.searchOpen);

  console.log(data, loading, error);

  useEffect(() => {
    // console.log(data, error);
    getRequest();
    // setResults(data?.products);
  }, []);

  return (
    <div className={classesList}>
      <SearchBar toggleSearch={toggleSearch} />
      <FilterBar />

      <div className={classes.mainPage}>
        <Backdrop show={null} onClick={null} />
        <SearchMobile show={search} />
        <Results showMap={showMap}>
          {resultsJSX}
          {/* <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: "dress1",
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Pink Sleeved Dress",
              rating: 4.98,
              trips: 68,
              image: "dress4",
              price: 159,
              oldPrice: 205,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Cream Dress",
              rating: 4.92,
              trips: 78,
              image: "dress2",
              price: 125,
              oldPrice: 149,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Grey Blazer",
              rating: 4.78,
              trips: 21,
              image: "blazer",
              price: 199,
              // oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: "shoes3",
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: "pants1",
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: "pants4",
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: "swim",
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: "shoes1",
              price: 199,
              oldPrice: 225,
            }}
          />
          <Result
            info={{
              name: "Louis Vuitton Red Sun Dress",
              rating: 4.92,
              trips: 238,
              image: "winter",
              price: 199,
              oldPrice: 225,
            }} */}
        </Results>
        <Map showMap={showMap} />
        <MapFilterButton
          showMap={showMap}
          className={classes.mobile}
          onFilter={showFilters}
          onToggle={() => setShowMap((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default SearchResults;
