import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Card from "./Card";

const App = () => {
  const [news, setnews] = useState([]);
  const [category, setcategory] = useState("general");

  // useeffect for fetching data from api

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f2625c037a3847c5ab54be977a63c7af`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        setnews(data.articles);
      });
  }, [category]);
  return (
    <>
      <Navbar setcategory={setcategory}></Navbar>
      {/* heading */}

      <h2 className="text-success text-center">Breaking Hot News</h2>
      <div className="card-container">
        {news.map((news, i) => {
          return (
            <Card
              key={i}
              title={news.title}
              description={news.description}
              url={news.url}
              imgurl={news.urlToImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
