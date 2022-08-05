import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <header>
                <div>
                    <h1>reDraft</h1>
                </div>
                <NavBar />
            </header>
        );
    }
}

export default Header;