import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={logo} alt="" className="logo" />

      <ul className="nav-list">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About us</li>
      </ul>

      <div className="nav-right">
        <li>Login</li>
        <button >Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
