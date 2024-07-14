import React from 'react';
import '../scss/about.scss';

const About = () => {
  return (
    <div className='wrapper about'>
          <h2>about</h2>
          <div className='browser'>
              <div className='header'>
                  <span className='red'></span>
                  <span className='yellow'></span>
                  <span className='green'></span>
              </div>
              <div className='content'>
                  <div className='icons'>left icons</div>
                  <div className='codes'>rifght contents</div>
              </div>
          </div>
    </div>
  )
}

export default About