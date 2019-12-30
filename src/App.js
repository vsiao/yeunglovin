import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";

function Home() { return <div className="Home" />; }
function About() { return <div className="About" />; }

function App() {
  return <>
    <HashRouter basename="/">
      <div className="Splash">
        <h1 className="Splash-title">stephanie &<br />vincent</h1>
        {/* <p>10.10.2020</p> */}
        <ul className="Splash-nav">
          <li className="Splash-navItem"><Link to="/rsvp" className="Splash-navLink">rsvp</Link></li>
          <li className="Splash-navItem"><Link to="/schedule" className="Splash-navLink">schedule</Link></li>
          <li className="Splash-navItem"><Link to="/stuff" className="Splash-navLink">stuff</Link></li>
        </ul>
      </div>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>
  </>;
}

export default App;
