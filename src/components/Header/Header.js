import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my website</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a>
            </nav>
        </div>
    );
};

export default Header;