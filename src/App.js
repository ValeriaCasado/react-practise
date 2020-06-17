// General Imports
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Component imports
import Home from "./components/home";

function App() {
  return (
    <Router>
    <div  style={{backgroundColor: "rgb(255, 0, 0,0.2)", margin: "5px"}}>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
