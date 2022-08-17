import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import '../styling/Appbar.css';
// import isLoggedIn from '../App';
import RedraftLogo from '../redrafttransparent.png';
import Cookies from 'universal-cookie';


const Appbar = () => {
    const cookies = new Cookies();
    const handleLogout = () => {
        cookies.remove('sessionToken')
      }
    return (
        
        <div className="appbar">
            <img className="logo" src={RedraftLogo} alt="redraft logo" />
            <Button className="login-btn"><Link to="/Login" className="links"> Login (Public)</Link></Button>
            <Button className="login-btn" onClick={handleLogout}>Logout</Button>
            <Link to="/" className="links"> Home (Public)</Link>
            
            <Link to="/RosterPortal" className="links"> Roster (Protected) </Link>
            <Link to="/DraftBoard" className="links">DraftBoard (Protected)</Link>
        </div>
        
    // <nav className="appbar">
    //     <Link to="/" style={{ padding: "10px" }}>
    //         League
    //     </Link>
        
    //     <Link to="/DraftBoard" style={{ padding: "10px" }}>
    //         Draft Board
    //     </Link>
    //     {isLoggedIn ? (
    //         <button>Logout</button>
    //         ) : (
    //         <button>Login</button>
    //         )}
    // </nav>
    );
};
export default Appbar;