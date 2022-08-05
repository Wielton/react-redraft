import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import PlayerList from './components/PlayersList';
// import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>reDraft Fantasy Football</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/PlayersList">Draft</Link>
      </nav>
    </div>
  );
}

export default App;
