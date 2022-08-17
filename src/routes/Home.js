import React from 'react';
import '../styling/HomePage.css';
import RedraftLogo from '../redrafttransparent.png';

const HomePage = () => {
    return (
        <div className="home-container">
            <img className="home-logo" src={RedraftLogo} alt="redraft logo" />
        </div>
        
    )
}

export default HomePage;