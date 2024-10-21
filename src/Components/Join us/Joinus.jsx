import React from 'react'
import './join.css'
import bg from '../../assets/bg-tilt.svg';
const Joinus = () => {
  return (
    <div className='joinus'>
      <div className='left'>
        <h3>Let’s Join With Us</h3>
        <p>By Joining and enjoying our panel , you can make the <br /> job you do a recruiter easier</p>
        <button className='button' href='/'>Join Us</button>
      </div>
      <div className='right'>
        <img src={bg} alt="" />
      </div>
    </div>
  )
}

export default Joinus
