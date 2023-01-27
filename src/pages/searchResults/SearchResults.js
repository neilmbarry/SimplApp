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
import queryActions from "../../store/querySlice";

const generateFilterOptions = (data) => {
  const typeOptions = [];
  const sizeOptions = [];
  const brandOptions = [];
  const activityOptions = [];
  data.products.forEach((prod) => {
    if (!typeOptions.includes(prod.type)) {
      typeOptions.push(prod.type);
    }
    if (prod.brand && !brandOptions.includes(prod.brand)) {
      brandOptions.push(prod.brand);
    }
    if (!sizeOptions.includes(prod.size)) {
      sizeOptions.push(prod.size);
    }
    if (!activityOptions.includes(prod.activity)) {
      activityOptions.push(prod.activity);
    }
  });
  return {
    typeOptions,
    sizeOptions,
    brandOptions,
    activityOptions,
  };
};

const SearchResults = ({ className }) => {
  const classesList = `${classes.main} ${className}`;

  const [showMap, setShowMap] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleSearch = () => {
    setShowModal((prev) => !prev);
  };

  const filters = useSelector((state) => state.query.value);

  const showFilters = () => {
    store.dispatch(configActions.setModal("filter"));
  };
  const { loading, error, data, getRequest } = useFetch({
    url: BASE_URL + "products",
    filters,
  });

  const search = useSelector((state) => state.config.value.searchOpen);

  console.log(data, loading, error);

  useEffect(() => {
    // console.log(data, error);
    getRequest();
    // setResults(data?.products);
  }, [filters]);

  useEffect(() => {
    if (!data) return;
    store.dispatch(configActions.updateQuery(generateFilterOptions(data)));
  }, [data]);

  return (
    <div className={classesList}>
      <SearchBar toggleSearch={toggleSearch} />
      <FilterBar />

      <div className={classes.mainPage}>
        <Backdrop show={null} onClick={null} />
        <SearchMobile show={showModal} />
        <Results showMap={showMap} results={data?.products} loading={loading} />
        {/* <Map showMap={showMap} /> */}
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
