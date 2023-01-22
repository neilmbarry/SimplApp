import { useState, useCallback } from "react";

const useFetch = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  //   console.log("useFetch rerendered", loading, data, error);

  function getRequest() {
    console.log("Calling get request");
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          //   throw Error("Could not access resource");
        }
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

  const postRequest = useCallback(
    (body, token) => {
      setData(null);
      setError(null);
      setLoading(true);
      fetch(url, {
        body,
        method: "POST",
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
          if (data.status === "error") {
            setError(data.message);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    },
    [url]
  );

  return { loading, error, data, getRequest, postRequest };
};

export default useFetch;
