import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Protected from './components/Protected';
import HomePage from './routes/Home';
import RosterPortal from './routes/RosterPortal';
import DraftBoard from './routes/DraftBoard';
import LoginPage from './routes/Login';
import Footer from './components/Footer';
import Appbar from './components/AppBar';
import UnauthorizedPage from './routes/404error';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';


const App = () => {
  // Get cookie named 'sessionToken' for DB and Routing authorization
  // const [isLoggedIn] = useState(false);
  // Once the cookie is retrieved, the token needs to be checked against the database,
  //  then
  
  // const [authorized, setAuthorization] = useState(false);
  

  return (
    <div className="App">
        <Appbar className="main-appbar"/>
          <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/Login" element={ <LoginPage /> } />
            <Route path="/RosterPortal" element={ <PrivateRoute> <RosterPortal /> </PrivateRoute> } />
            <Route path="/DraftBoard" element={ <PrivateRoute> <DraftBoard /> </PrivateRoute> } />
            <Route path="/404error" element={ <PrivateRoute> <UnauthorizedPage /> </PrivateRoute> } />
          </Routes>
        <Footer className="footer"/>
    </div>
  );
}

export default App;
