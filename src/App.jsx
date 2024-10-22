import React from 'react'
import Navbar from './Navbar + Footer/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Titlesection from './Components/titlesection/titlesection'
import Features from './Components/Features/Features'
import Pricing from './Components/Pricing/Pricing'
import Contact from './Components/Contact/Contact'
import Joinus from './Components/Join us/Joinus'
import Footer from './Navbar + Footer/footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <HeroSection />
      <Features />
      <Pricing />
      <Contact />
      <Joinus />
      <Footer />
    </div>
  )
}

export default App
