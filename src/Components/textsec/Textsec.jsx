import React from 'react';
import "./textsection.css";

const Textsec = ({subtitle }) => {
  return (
    <div className='text-1'>
      <h2 className='h11'>
        <p className='span1'>{subtitle}</p>
      </h2>
    </div>
  );
};

export default Textsec;