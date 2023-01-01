import React from 'react';
import NewsItem from './NewsItem';

const NewsGrid = ({ items }) => {
  return (
    <div className='news-grid'>
      {items
        .filter((item, idx) => idx > 8 && idx < 18)
        .map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
    </div>
  );
};

export default NewsGrid;
