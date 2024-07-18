import React from 'react';
import '../scss/carousel.scss';

const Carousel = () => {
    const path = process.env.PUBLIC_URL;
  return (
    <div className='carousel'>
        <button>prev</button>
        <div className='work'>
          <img alt='m' src={`${path}/img/project/airbnb.png`} />
          <h3>Airbnb</h3>
        <span>個人プロジェクト</span>      
        <p>information this is a airbnb site wow amazing hahaha</p>
        </div>
        <button>next</button>  
    </div>
  )
}

export default Carousel