import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementsByClassName('Navbar')[0];
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
            <div className="nav-right">
                <Link to="/login"><li>Login</li></Link>
                <Link to="/sign-up"><button>Sign up</button></Link>
            </div>
        </div>
    );
};

export default Navbar;
