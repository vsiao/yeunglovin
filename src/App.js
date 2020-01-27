import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <div className="Home" />;
}
function About() {
  return <div className="About" />;
}

function App() {
  return (
    <>
      <HashRouter basename="/">
        <div className="Splash">
          <div className="Splash-wrapper">
            <h1 className="Splash-title">10.10.20</h1>
            <h2 className="Splash-subtitle">Stephanie & Vincent</h2>
            <div className="Splash-sticker">(are getting married)</div>
            <div className="Splash-okay">
              {getCelebrate()} <span className="Splash-arrow">↓</span>
            </div>
          </div>
          <ul className="Splash-nav">
            <li className="Splash-navItem">
              <Link to="/us" className="Splash-navLink">
                About us
              </Link>
            </li>
            <li className="Splash-navItem">
              <Link to="/details" className="Splash-navLink">
                Details
              </Link>
            </li>
            <li className="Splash-navItem">
              <Link to="/rsvp" className="Splash-navLink">
                RSVP
              </Link>
            </li>
          </ul>
        </div>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </>
  );
}

export default App;

function getCelebrate() {
  const words = ['Yay!', 'Coolbeans', 'Okay, so what now?', 'And…?', 'Tell me more'];
  const randIndex = Math.floor(Math.random() * Math.floor(words.length));
  return words[randIndex];
}
