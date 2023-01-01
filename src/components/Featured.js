import React from 'react';
import './featured.scss';

const Featured = ({ item }) => {
  const date = item.publishedAt;
  const formatDate = date.replace('T', ' ');
  const formatTime = formatDate.replace('Z', '');

  return (
    <a href={item.url} className='featured-box'>
      <div className='featured-image'>
        <img src={item.urlToImage} alt={item.title} />
      </div>
      <div className='featured-text'>
        <div className='titleBg'>
          <h1>{item.title}</h1>
        </div>
        <div className='author'>
          <span>{item.source.name}</span>
          <span>{formatTime}</span>
        </div>
      </div>
    </a>
  );
};

export default Featured;
