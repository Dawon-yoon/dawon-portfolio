import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import '../scss/intro.scss';
import Stars from './Stars';

const Intro = () => {
  return (
    <div className='wrapper intro'>
     <Stars/>
      <h1>YOON DAWON<br />
          PORTFOLIO
      </h1>
    </div>
  )
}

export default Intro