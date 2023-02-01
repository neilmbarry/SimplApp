import { useState, useCallback } from "react";

const generateQueryString = (filters) => {
  if (!filters) return "";
  const { searchTerm, activity, brand, size, sortBy, type } = filters;
  const queryStringArray = [];
  searchTerm && queryStringArray.push(`name=${searchTerm}`);
  brand.length && queryStringArray.push(`brand=${brand.join(",")}`);
  size.length && queryStringArray.push(`size=${size.join(",")}`);
  activity.length && queryStringArray.push(`activity=${activity.join(",")}`);
  type.length && queryStringArray.push(`type=${type.join(",")}`);
  sortBy && queryStringArray.push(`sort=${sortBy}`);
  const queryString = "?" + queryStringArray.join("&");
  return queryString;
};

const useFetch = ({ url, filters }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  function getRequest(token) {
    const queryString = generateQueryString(filters);
    setLoading(true);

    fetch(url + queryString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }

  const postRequest = (body, token, method) => {
    setData(null);
    setError(null);
    setLoading(true);
    fetch(url, {
      body,
      method: method || "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        if (data.status === "error" || data.status === "fail") {
          setError(data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return { loading, error, data, getRequest, postRequest };
};

export default useFetch;
