import React from 'react';
import "./titlesection.css";

const Titlesection = ({ text, backgroundColor = "#5e2bff", textColor = "#fff" }) => {
  return (
    <div 
      className='button' 
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {text}
    </div>
  );
};

export default Titlesection;
