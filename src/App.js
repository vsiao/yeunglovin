import cx from "classnames";
import React, { useCallback, useEffect, useState } from 'react';
import { HashRouter, Route, Link, useHistory } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Splash />
      <AboutUs />
      <Schedule />
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
        <Link to="/schedule" className="Splash-navLink">
          Schedule
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

function Schedule() {
  return <ScrollRoute path="/schedule" className="Schedule">
    <h2>Schedule</h2>
    <h4 className="Schedule-event">🛬 arrival</h4>

    <h3>Saturday, October 10<sup>th</sup>, 2020</h3>

    <div class="Schedule-standaloneMap Schedule-map">
      <div class="Schedule-mapContainer">
        <iframe className="Schedule-mapFrame" title="Shuttle 1 Map" src="https://www.google.com/maps/d/u/0/embed?mid=1bHg27zQY1E2x3BxUuiPvpbzNJmVJlHbW"></iframe>
      </div>
    </div>

    <div class="Schedule-timeline">
      <div className="Schedule-timelineEvent">
        <span className="Schedule-timestamp">10:30am</span>
        <h4 className="Schedule-event">🚌 shuttle pickup</h4>
        <span class="Schedule-location">Hyatt Regency San Francisco</span>
      </div>
      <div className="Schedule-timelineEvent">
        <span className="Schedule-timestamp">11:00am</span>
        <h4 className="Schedule-event">🚌 shuttle pickup</h4>
        <span class="Schedule-location">Courtyard Oakland Downtown</span>
        <p className="Schedule-description">
          We have shuttles to the ceremony, picking up at both hotels.
          Parking at the garden is limited and must be reserved in advance.
          Let us know if you need to drive in!
        </p>
        <div class="Schedule-inlineMap Schedule-map">
          <div class="Schedule-mapContainer">
            <iframe className="Schedule-mapFrame" title="Shuttle 1 Map" src="https://www.google.com/maps/d/u/0/embed?mid=1bHg27zQY1E2x3BxUuiPvpbzNJmVJlHbW"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="Schedule-timeline">
      <div className="Schedule-timelineEvent Schedule-majorEvent">
        <h4 className="Schedule-event">💍 ceremony</h4>
        <span className="Schedule-timestamp">12:00pm</span>
        <span className="Schedule-location">Redwood Grove @ UC Botanical Garden</span>

      </div>
      <div className="Schedule-timelineEvent">
        <h4 className="Schedule-event">🌸 afternoon walk</h4>
        <span className="Schedule-timestamp">1:00pm</span>
        <span className="Schedule-location">UC Botanical Garden at Berkeley</span>
        <p className="Schedule-description">
          After the ceremony, enjoy free admission to the gardens
          which feature over 10,000 types of plants. A small lunch will be provided
          for you to enjoy while you walk around.
        </p>
      </div>
      <div className="Schedule-timelineEvent">
        <h4 className="Schedule-miniEvent">shuttle to reception</h4>
        <span className="Schedule-timestamp">3:00pm</span>
      </div>
      <div className="Schedule-timelineEvent Schedule-majorEvent">
        <h4 className="Schedule-event">🍹 reception</h4>
        <span className="Schedule-timestamp">3:30pm</span>
        <span className="Schedule-location">Forage Kitchen</span>
      </div>
      <div className="Schedule-timelineEvent">
        <h4 className="Schedule-event">🍽 dinner</h4>
        <span className="Schedule-timestamp">5:30pm</span>
      </div>
      <div className="Schedule-timelineEvent">
        <h4 className="Schedule-miniEvent">end of scheduled activities</h4>
        <span className="Schedule-timestamp">8:00pm</span>
      </div>
      <div className="Schedule-timelineEvent Schedule-majorEvent">
        <h4 className="Schedule-event">💃 after party</h4>
        <span className="Schedule-timestamp">9:00pm</span>
        <span className="Schedule-location">???</span>
        <p className="Schedule-description">
          We literally don't have any plans! Who knows what will happen?
        </p>
      </div>
    </div>

    <h3>Sunday, October 11<sup>th</sup>, 2020</h3>

    <h4 className="Schedule-event">dim sum</h4>
    11:30am–1:30pm

  </ScrollRoute>;
}

function RSVP() {
  return <ScrollRoute path="/rsvp" className="RSVP">
    <iframe
      className="RSVP-formFrame"
      src="https://docs.google.com/forms/d/e/1FAIpQLScv_sHtBsqRFMSLRa3cvA3ylcfKyjlXV4P76XUmf49jC_K0JQ/viewform?embedded=true"
      height="1550" frameborder="0" marginheight="0" marginwidth="0">
      Loading…
    </iframe>
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
