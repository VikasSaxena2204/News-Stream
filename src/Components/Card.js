import React from 'react';
import '../index.css';


const Card = ({ data }) => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card" key={index}>
              <img
                src={curItem.urlToImage}
                alt={curItem.title || 'News Image'}
                className="cardImage"
              />
              <div className="content">
                <a
                  className="title"
                  href={curItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => openUrl(curItem.url)}>Read More</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
