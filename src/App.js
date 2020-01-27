import cx from "classnames";
import React, { useCallback, useEffect, useState } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Splash />
      <AboutUs />
      <Details />
      <RSVP />
    </HashRouter>
  );
}

export default App;

function Splash() {
  const words = ['Yay!', 'coolbeans', 'Okay, so…', 'And…?', 'Tell me more'];
  const randIndex = Math.floor(Math.random() * Math.floor(words.length));
  const celebrationText =  words[randIndex];

  return <ScrollRoute exact path="/" className="Splash">
    <div className="Splash-wrapper">
      <h1 className="Splash-title">10.10.20</h1>
      <h2 className="Splash-subtitle">Stephanie & Vincent</h2>
      <div className="Splash-sticker">(are getting married)</div>
      <div className="Splash-okay">
        {celebrationText} <span className="Splash-arrow">↓</span>
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
  </ScrollRoute>;
}

function AboutUs() {
  return <ScrollRoute path="/us" className="AboutUs">
    woah there
  </ScrollRoute>;
}

function Details() {
  return <ScrollRoute path="/details" className="Details">
    we're still under construction
  </ScrollRoute>;
}

function RSVP() {
  return <ScrollRoute path="/rsvp" className="RSVP">
    come back later!
  </ScrollRoute>;
}

function ScrollRoute({ path, className, setHeight, children }) {
  return <Route path={path}>
    {({ match }) =>
      <ScrollSection
        match={match}
        className={className}
        setHeight={setHeight}
        children={children}
      />}
  </Route>;
}

function ScrollSection({ match, className, setHeight, children }) {
  const [rootNode, setRootNode] = useState(null);

  // Measure and set the height of this section, once on mount
  const rootRef = useCallback(node => {
    setRootNode(node);
    if (node !== null) {
      // setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  // If we navigated to this section, scroll it into view
  const shouldScroll = match && match.isExact && rootNode;
  useEffect(() => {
    if (shouldScroll) {
      rootNode.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [shouldScroll, rootNode]);

  return <section ref={rootRef} className={cx("ScrollSection", className)}>
    {children}
  </section>;
}
