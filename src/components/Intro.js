import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import '../scss/intro.scss';
import Stars from './Stars';

const Intro = () => {
  return (
    <div className='wrapper'>
     <Stars/>
    </div>
  )
}

export default Intro