import { Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>reDraft Fantasy Football</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ManLogin">Login</Link>
        <Link to="/DraftBoard">Draft</Link>
      </nav>
    </div>
  );
}

export default App;
