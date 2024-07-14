import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import '../scss/intro.scss';

const Intro = () => {
  return (
      <div className='wrapper intro'>
          <h1>yoon dawon<br />portfolio</h1>
          <div className='scroll'>
              <p>scroll</p>
              <div><FontAwesomeIcon icon={faAnglesDown} /></div>
          </div>
    </div>
  )
}

export default Intro