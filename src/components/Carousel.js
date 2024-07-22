import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import '../scss/carousel.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Carousel = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => { 
    setCurrentIndex((currentIndex - 1 + item.length) % item.length);
  }
  const handleNext = () => { 
    setCurrentIndex((currentIndex + 1) % item.length);
  }
  const handleMove = (index) => { 
    setCurrentIndex(index);
  }

  return (
    <div className='carousel'>
      {item.length > 1 && (
        <>
          <button className='handleBtn left' onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <div>
          <img alt='project-image' src={item[currentIndex].image} />
            <h3>{item[currentIndex].title}</h3>
            <span className='sm'>{item[currentIndex].work}</span>      
            <p>{item[currentIndex].description}</p>
            <div className='btn-area'>
              {item[currentIndex].tags.map((tag) => (<span>{tag}</span>))}
          </div>
          <div className='btn-area'>
            <a href={item[currentIndex].github} target='_blank' rel='noopener noreferrer'><button><FontAwesomeIcon icon={faGithub} /> GITHUB</button></a>
            <a href={item[currentIndex].view} target='_blank' rel='noopener noreferrer'><button className='view'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> VIEW</button></a>
          </div>
          <div className='slide-area'>
            <button className='btn left' onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
              <div>
                {item.map((project, index) => (
                  <button
                    key={index}
                    className={index === currentIndex ? 'active' : ''}
                    onClick={()=>handleMove(index)}
                  ></button>
                ))}
            </div>
          <button className='btn right' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        </div>
        <button className='handleBtn right' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></button> 
        </>
      ) }      
    </div>
  )
}

export default Carousel