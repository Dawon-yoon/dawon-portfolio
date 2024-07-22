import React,{useEffect} from 'react';
import '../scss/contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  useEffect(() => { 
    const handleScroll = () => { 
      const scrollPosition = window.scrollY;
      const texts = document.querySelector('.texts');
      texts.style.transform = `translateY(-${scrollPosition * 0.05}px)`;
    }
    window.addEventListener('scroll', handleScroll);
    return () => { 
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  return (
    <div id='contact' className='wrapper contact'>
      <h2>Contact</h2>
      <div className='texts'>
        <div>
          <span><FontAwesomeIcon icon={faSquarePhone} />  PHONE</span>
          <p>080 6754 8507</p>
        </div>
        <div>
          <span><FontAwesomeIcon icon={faEnvelope} />  EMAIL</span>
          <p>dawon3887@gmail.com</p>
        </div>
        <div>
          <span><FontAwesomeIcon icon={faGithub} />  GITHUB</span>
          <p><a href='https://github.com/Dawon-yoon' target='_blank' rel="noreferrer noopener">github.com/Dawon-yoon</a></p>
        </div>
        <span className='border'></span>
      </div>
      
      <p className='footer'>Copyright &#169; 2024 YOON DAWON Portfolio ALL rights reserved.</p>
    </div>
  )
}

export default Contact