import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../scss/carousel.scss';


const Carousel = () => {
    const path = process.env.PUBLIC_URL;
  return (
    <div className='carousel'>
        <button className='handleBtn'><FontAwesomeIcon icon={faChevronLeft} /></button>
        <div>
          <img alt='m' src={`${path}/img/project/airbnb.png`} />
          <h3>Airbnb</h3>
        <span className='sm'>個人プロジェクト</span>      
        <p>information this is a airbnb site wow amazing hahaha</p>
        <div className='btn-area'>
          <span>#html</span>
          <span>#css</span>
        </div>
        <div className='btn-area'>
          <button>Github</button>
          <button>View</button>
        </div>
        <div className='slide-area'>
          <button className='btn'><FontAwesomeIcon icon={faChevronLeft} /></button>
          <div>
            <button></button>
          </div>
          <button className='btn'><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        </div>
        <button className='handleBtn'><FontAwesomeIcon icon={faChevronRight} /></button>  
    </div>
  )
}

export default Carousel