import cx from "classnames";
import React, { useCallback, useEffect, useState } from 'react';
import { HashRouter, Route, Link, useHistory } from 'react-router-dom';
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
    <ul className="AboutUs-gallery">
      <li><img className="AboutUs-galleryImage" src="/theporch.jpg" /></li>
      <li><img className="AboutUs-galleryImage" src="/mtwash.jpg" /></li>
      <li><img className="AboutUs-galleryImage" src="/stanleypark.jpg" /></li>
    </ul>
    <div className="AboutUs-content">
      woah there
    </div>
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

function ScrollRoute({ path, className, children }) {
  return <Route path={path}>
    {({ match }) =>
      <ScrollSection
        path={path}
        match={match}
        className={className}
        children={children}
      />}
  </Route>;
}

function ScrollSection({ path, match, className, children }) {
  const [rootNode, setRootNode] = useState(null);

  // Set root node once on mount
  const rootRef = useCallback(node => setRootNode(node), []);

  // If we navigated to this section, scroll it into view
  const isCurrentRoute = match && match.isExact;
  const isScrolledIntoView = useCallback(() => {
    const rootRect = rootNode && rootNode.getBoundingClientRect();
    return rootRect && rootRect.top < (window.innerHeight / 3) &&
      rootRect.bottom >= (2 * window.innerHeight / 3);
  }, [rootNode]);

  useEffect(() => {
    if (isCurrentRoute && !isScrolledIntoView() && rootNode) {
      rootNode.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isCurrentRoute, isScrolledIntoView, rootNode]);

  const history = useHistory();

  // If we scrolled to this section, set the route to it
  useEffect(() => {
    if (!isCurrentRoute && rootNode) {
      const checkScroll = () => {
        if (isScrolledIntoView()) {
          history.push(path)
        }
      };
      let timer;
      const debouncedCheckScroll = () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(checkScroll, 50);
      };
      window.addEventListener("scroll", debouncedCheckScroll);
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
        window.removeEventListener("scroll", debouncedCheckScroll)
      };
    }
  }, [isCurrentRoute, rootNode, isScrolledIntoView, history, path]);

  return <section ref={rootRef} className={cx("ScrollSection", className)}>
    {children}
  </section>;
}
