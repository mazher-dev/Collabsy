import React from 'react';
import "./textsection.css";

const Textsection = ({ title, subtitle }) => {
  return (
    <div className='text-1'>
      <h1>
        {title} <br />
        <span>{subtitle}</span>
      </h1>
    </div>
  );
};

export default Textsection;