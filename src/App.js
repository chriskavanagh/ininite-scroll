import React, { useCallback, useState, useRef } from "react";
//import useTitle from "./hooks/useTitle";
import useRestApi from "./hooks/useRestApi";
//import styled from "styled-components";
//import RefForm from "./RefForm";
//import Spinner from "./Spinner";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const url2 = "http://openlibrary.org/search.json";
  const { data: myData, hasMore, loading, error } = useRestApi(
    url2,
    query,
    pageNumber
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Observed");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="App">
      <input type="text" value={query} onChange={handleSearch}></input>
      <ul>
        {myData.map((book, index) => {
          if (myData.length === index + 1) {
            return (
              <li
                ref={lastBookElementRef}
                key={index}
                style={{ background: "red" }}
              >
                {book}
              </li>
            );
          } else {
            return <li key={index}>{book}</li>;
          }
        })}
      </ul>
    </div>
  );
} //App

export default App;
