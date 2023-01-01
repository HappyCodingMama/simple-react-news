import React from 'react';
import Hero from './Hero';
import './heroGrid.scss';

const HeroGrid = ({ items }) => {
  return (
    <div className='hero-grid'>
      <div className='hero-items'>
        {items
          .filter((item, idx) => idx > 3 && idx < 7)
          .map((item, i) => (
            <Hero key={i} item={item} />
          ))}
      </div>
    </div>
  );
};

export default HeroGrid;
