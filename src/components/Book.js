import React from 'react';
import '../scss/book.scss';

const Book = () => {
    return (
      <div className='book-container'>
            <div className='book'>
                <div><p className='cover-title'>html</p></div>
                <div className='cover front'></div>
                <div className='inner-content'></div>
                <div className='cover back'></div>
                <div className='top'></div>
                <div className='bottom'></div>
            </div>      
      </div>
  )
}

export default Book