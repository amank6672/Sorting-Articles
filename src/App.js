import React, { useEffect } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";
import { useState } from "react";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortedArticles, setSortedArticles] = useState([]);

  useEffect(() => {
    sortByVote();
  }, [articles]);

  const sortByVote = () => {
    let tempArticles = articles;
    tempArticles = tempArticles.sort((a, b) =>
      a.upvotes > b.upvotes ? -1 : 1
    );
    setSortedArticles([...tempArticles]);
  };

  const sortByDate = () => {
    let tempArticles = articles;
    tempArticles = tempArticles.sort((a, b) => (a.date > b.date ? -1 : 1));
    setSortedArticles([...tempArticles]);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={sortByVote}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={sortByDate}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
}

export default App;
