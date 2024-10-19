import React from 'react'
import Titlesection from '../titlesection/titlesection'
import "./Features.css"
import Textsection from '../textsection/textsection'

const Features = () => {
  return (
    <div className='Features'>
      <Titlesection text="Features" backgroundColor="#5e2bff" textColor="#fff"/>
      <Textsection 
        title="Unlock Your Potential with Our" 
        subtitle="Admin Dashboard Features" 
      />
    
    </div>
  )
}

export default Features
