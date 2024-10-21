import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../index.css';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = "20219398b08c4b85ab7603d7e855ab41";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        let dt = jsonData.articles.slice(0, 10);
        setNewsData(dt);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [search, API_KEY]); 

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const searchCategory = (category) => {
    setSearch(category);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>News Stream</h1>
        </div>
        <ul className="nav-links" style={{ display: "flex", gap: "15px" }}>
          <a href="/" style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
          <a href="/" style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
          <a href="/" style={{ fontWeight: 600, fontSize: "17px" }}>World</a>
          <a href="/" style={{ fontWeight: 600, fontSize: "17px" }}>Tech</a>
        </ul>
        <div className='searchBar'>
          <input
            type='text'
            placeholder='Search News'
            value={search}
            onChange={handleInput}
          />
          <button onClick={() => setSearch(search)}>Search</button>
        </div>
      </nav>

      <div className="header">
        <p className='head'>Stay Ahead with the Latest News Headlines!</p>
      </div>

      <div className='categoryBtn'>
        <button onClick={() => searchCategory("sports")}>Sports</button>
        <button onClick={() => searchCategory("politics")}>Politics</button>
        <button onClick={() => searchCategory("entertainment")}>Entertainment</button>
        <button onClick={() => searchCategory("health")}>Health</button>
        <button onClick={() => searchCategory("fitness")}>Fitness</button>
      </div>

      <div className='contentSection'>
        {loading ? (
          <p>Loading Trending news...</p>
        ) : newsData && newsData.length > 0 ? (
          <Card data={newsData} />
        ) : (
          <p>No results found. Try a different search term or category.</p>
        )}
      </div>
    </div>
  );
};

export default Newsapp;
