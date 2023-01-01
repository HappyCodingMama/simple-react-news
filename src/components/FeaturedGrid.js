import React from 'react';
import Featured from './Featured';
import './featuredgrid.scss';

const NewsGrid = ({ items }) => {
  return (
    <div className='featured-grid'>
      <div className='featured-title'>
        <h1>Latest</h1>
      </div>
      <div className='featured-items'>
        {items
          .filter((item, idx) => idx < 3)
          .map((item, i) => (
            <Featured key={i} item={item} />
          ))}
      </div>
    </div>
  );
};

export default NewsGrid;
