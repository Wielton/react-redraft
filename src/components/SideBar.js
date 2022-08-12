import React, { Component } from 'react';
import '../styling/SideBar.css';

class SideBar extends Component {
    state = {  } 
    render() { 
        return (
            <aside className="Sidebar">
                <ul>
                    <a href="google.ca">Google</a>
                </ul>
            </aside>
        );
    }
}
 
export default SideBar;