import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarClosing, setIsSidebarClosing] = useState(false);
  
   const handleSidebarToggle = () => { 
     if (isSidebarOpen) {
       setIsSidebarClosing(true); 
       setTimeout(() => {
         setIsSidebarOpen(!isSidebarOpen);
       }, 700)
       }else { 
       setIsSidebarOpen(!isSidebarOpen);
       setIsSidebarClosing(false);
     }
   }
  

  return (
    <div>
    <div className='navbar'> 
      <div
        className='show'
        onClick={handleSidebarToggle}
      >
        {isSidebarOpen? (<FontAwesomeIcon icon={faX} />):(<div><FontAwesomeIcon icon={faBars} /></div>)}
      </div> 
          <div className='menus hidden'>
          <div>
            <a href='#about'>about</a>
            <span className='hover'></span>
          </div>
          <div>
            <a href='#skill'>skill</a>
            <span className='hover'></span>
          </div>
          <div>
            <a href='#project'>project</a>
            <span className='hover'></span>
            </div>
            <div>
            <a href='#contact'>contact</a>
            <span className='hover'></span>
            </div>
          </div>   
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'} ${isSidebarClosing && 'closing'}`}>
        <div>
          <span>
            <a href='#about'>about</a>
          </span>
          <span>
            <a href='#skill'>skill</a>
          </span>
          <span>
            <a href='#project'>project</a>
          </span>
          <span>
            <a href='#contact'>contact</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Nav