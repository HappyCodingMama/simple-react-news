import React from 'react';
import './hero.scss';

const Hero = ({ item }) => {
  const date = item.publishedAt;
  const formatDate = date.replace('T', ' ');
  const formatTime = formatDate.replace('Z', '');

  return (
    <a href={item.url} className='hero-box'>
      <div className='hero-text'>
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

export default Hero;
