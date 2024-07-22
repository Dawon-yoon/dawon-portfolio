import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import '../scss/intro.scss';
import Stars from './Stars';

const Intro = () => {
  const path = process.env.PUBLIC_URL;

  useEffect(() => { 
    const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const text1 = document.querySelector('.text1');
            const text2 = document.querySelector('.text2');
            text1.style.transform = `translateX(${scrollPosition}px)`;
            text2.style.transform = `translateX(-${scrollPosition}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className='wrapper intro'>
      <Stars />
      <div className='animation'>
      <div
        className='circle'>
        <img src={`${path}/img/assets/moon2.png`} />
      </div>
      <div className='text'>
        <h1 className='text1'>yoon dawon</h1>
        <h1 className='text2'>portfolio</h1>
        </div>
      </div>
    </div>
  )
}

export default Intro