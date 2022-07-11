import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SearchResults = ({ url, handleSearch }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const prom = axios(url);
    prom.then((res) => setResults(res.data.results.slice(0, 15)));
    prom.catch(() => {});
  }, [url]);

  const listResult = results.map((item) => (
    <button onClick={() => handleSearch(item.url)} key={item.url.substring(50)}>
      {item.name}
    </button>
  ));

  return <div className="results">{listResult}</div>;
};

export default SearchResults;
