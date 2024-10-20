import React from 'react'
import Titlesection from '../titlesection/titlesection'
import "./Features.css"
import Textsection from '../textsection/textsection'
import graph from '../../assets/graph.svg';
import tracking from '../../assets/tracking.svg';


const Features = () => {
  return (
    <div className='Features'>
      <Titlesection text="Features" backgroundColor="#5e2bff" textColor="#fff"/>
      

      <Textsection 
        title="Unlock Your Potential with Our" 
        subtitle="Admin Dashboard Features" 
      />
      <div className='twosection'>
        <div className='left-section'>
            <img src={graph} alt="" />
            <h1>Real-Time Data Charts</h1>
            <p>Visualize project metrics at a glance and make informed decisions quickly.</p>
        </div>
        <div className='right-section'>
            <img src={tracking} alt="" />
            <h1>Project Tracking</h1>
            <p>Monitor progress and deadlines to keep your team on track.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
