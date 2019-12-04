import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function Home() { return <div className="Home" />; }
function About() { return <div className="About" />; }

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  );
}

export default App;
