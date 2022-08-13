import React from 'react'
import { Routes, Route } from "react-router-dom";
// import Cookies from 'universal-cookie';
import HomePage from './routes/Home';
import LoginPage from './routes/Login';
import './App.css';
import DraftBoard from './routes/DraftBoard';


const App = () => {
  // Get cookie named 'sessionToken' for DB and Routing authorization
  // const cookies = new Cookies();
  // const [authorized, setAuthorization] = useState(false);
  // const token = cookies.get('sessionToken');
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={ <LoginPage /> } />
        <Route path="/DraftBoard" element={ <DraftBoard /> } />
      </Routes>
    </div>
  );
}

export default App;
