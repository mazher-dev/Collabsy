import React from 'react'
import Navbar from './Navbar + Footer/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Titlesection from './Components/titlesection/titlesection'
import Features from './Components/Features/Features'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  )
}

export default App
