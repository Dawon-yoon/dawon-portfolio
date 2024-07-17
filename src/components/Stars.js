import React, { useEffect, useState } from 'react';
import '../scss/stars.scss';

const Stars = () => {
  const [stars, setStars] = useState([]);

  const makeStars = () => {
    const maxSize = Math.max(window.innerWidth, window.innerHeight);

    const getRandomX = () => Math.random() * maxSize;
    const getRandomY = () => Math.random() * maxSize;
    const randomRadius = () => Math.random() * 0.7 + 0.6;

    const _size = Math.floor(maxSize / 2);

    const newStars = new Array(_size).fill().map((_, i) => ({
      cx: getRandomX(),
      cy: getRandomY(),
      r: randomRadius()
    }));

    setStars(newStars);
  };

  useEffect(() => {
    makeStars();
    window.addEventListener('resize', makeStars);
    return () => window.removeEventListener('resize', makeStars);
  }, []);

  return (
    <svg className="sky" width="100%" height="100%">
      {stars.map((star, index) => (
        <circle
          key={index}
          className="star"
          cx={star.cx}
          cy={star.cy}
          r={star.r}
        />
      ))}
    </svg>
  );
};

export default Stars;