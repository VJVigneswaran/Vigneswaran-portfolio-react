import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = ({ scrollTo }) => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    // Detect screen resize and close mobile nav on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setNavActive(false);  // Close the mobile nav when the screen is resized to tablet or desktop size
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <div className="container-fluid">
                <h1 className='logoname'>Vigneswaran</h1>
                <button onClick={toggleNav} className="barsBtn"><FaBars /></button>
                <nav className={navActive ? 'active' : ''}>
                    <ul>
                        <li onClick={() => { scrollTo('home'); setNavActive(false); }}>HOME</li>
                        <li onClick={() => { scrollTo('about'); setNavActive(false); }}>ABOUT</li>
                        <li onClick={() => { scrollTo('projects'); setNavActive(false); }}>PROJECTS</li>
                        <li onClick={() => { scrollTo('contact'); setNavActive(false); }}>CONTACT</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
