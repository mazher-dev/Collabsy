import React, { useEffect } from 'react'; // Ensure useEffect is imported
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementsByClassName('Navbar')[0]; // Get the first element with the class 'Navbar'
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run only on mount and unmount

    return (
        <div className='Navbar'>
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-list">
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>About us</li>
            </ul>
            <div className="nav-right">
                <li>Login</li>
                <button onClick={() => { /* Your onClick logic here */ }}>Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;
