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
              <div>about</div>
              <div>skill</div>
              <div>project</div>
              <div>contact</div>
          </div>   
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'} ${isSidebarClosing && 'closing'}`}>
        <div>
          <span>about</span>
          <span>skill</span>
          <span>project</span>
          <span>contact</span>
        </div>
      </div>
    </div>
  )
}

export default Nav