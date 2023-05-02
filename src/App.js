import cx from "classnames";
import React, { useCallback, useEffect, useState } from 'react';
import { HashRouter, Route, Link, useHistory, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Route path="/stream" component={RedirectToYouTube} />
      <Splash />
      <AboutUs />
      <Schedule />
      <RSVP />
    </HashRouter>
  );
}

export default App;

function RedirectToYouTube() {
  useEffect(() => {
    window.location.href = "https://youtu.be/Zp8LxwKaEj4";
  }, []);
  return null;
}

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
      We're still adding things; check back later!
    </div>
  </ScrollRoute>;
}

function Schedule() {
  return <ScrollRoute path="/schedule" className="Schedule">
    <h2>Schedule</h2>
    <section class="Schedule-section">
      <div class="Schedule-sideContent">
        <div className="Schedule-map">
          <div class="Schedule-mapContainer">
            <iframe className="Schedule-mapFrame" title="Shuttle 1 Map" src="https://www.google.com/maps/d/u/0/embed?mid=1mHt2KFG3NA3DvG074fMdBJ4tw52p-0IS"></iframe>
          </div>
        </div>
      </div>

      <div className="Schedule-timeline">
        <div className="Schedule-timelineEvent Schedule-majorEvent">
          <h4 className="Schedule-event">🛬 arrival</h4>
          <span className="Schedule-timestamp">TBD</span>
          <p className="Schedule-description">
          We've asked two hotels for room blocks, and will have shuttles to the ceremony picking up
          at both locations. You are welcome to stay at an Airbnb, but you'll have to make your own way
          to the hotels to catch a shuttle!
          </p>

          <h5 className="Schedule-descriptionHeader">Hyatt Regency Embarcadero</h5>
          <p className="Schedule-description">
            <strong>30 min BART ride</strong> from reception; <strong>5 min walk</strong> from Embarcadero BART station
          </p>
          <p className="Schedule-description">
            This hotel is in a more central location in downtown San Francisco;
            we'd recommend it for longer stays if you're planning to do some sightseeing.
          </p>

          <h5 className="Schedule-descriptionHeader">Courtyard Oakland Downtown</h5>
          <p className="Schedule-description">
            <strong>20 min walk</strong> from reception; <strong>2 min walk</strong> from 12th St./Oakland BART station
          </p>
          <p className="Schedule-description">
            This hotel is next to Oakland Chinatown and is basically next door
            to our reception venue. Super convenient!
          </p>
        </div>
      </div>
    </section>

    <section class="Schedule-section">
      <h3 className="Schedule-sectionTitle">Saturday, October 10<sup>th</sup>, 2020</h3>

      <div class="Schedule-sideContent">
        <div className="Schedule-map">
          <div class="Schedule-mapContainer">
            <iframe className="Schedule-mapFrame" title="Shuttle 1 Map" src="https://www.google.com/maps/d/u/0/embed?mid=1bHg27zQY1E2x3BxUuiPvpbzNJmVJlHbW"></iframe>
          </div>
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
          <div class="Schedule-inlineContent Schedule-map">
            <div class="Schedule-mapContainer">
              <iframe className="Schedule-mapFrame" title="Shuttle 1 Map" src="https://www.google.com/maps/d/u/0/embed?mid=1bHg27zQY1E2x3BxUuiPvpbzNJmVJlHbW"></iframe>
            </div>
          </div>
        </div>
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
    </section>

    <section class="Schedule-section">
      <h3 className="Schedule-sectionTitle">Sunday, October 11<sup>th</sup>, 2020</h3>

      <div className="Schedule-sideContent">
      </div>

      <div className="Schedule-timeline">
        <div className="Schedule-timelineEvent Schedule-majorEvent">
          <h4 className="Schedule-event">🍵 dim sum</h4>
          <span className="Schedule-timestamp">~11:30am</span>
          {/* <span className="Schedule-location">???</span> */}
          <p className="Schedule-description">
            We'd like to have dim sum the day after! Location TBD.
          </p>
        </div>

        <div className="Schedule-timelineEvent Schedule-majorEvent">
          <h4 className="Schedule-event">🛫 departure</h4>
          <span className="Schedule-timestamp">???</span>
          {/* <span className="Schedule-location"></span> */}
          <p className="Schedule-description">
            Aw, leaving already? Come back soon!
          </p>
        </div>
      </div>
    </section>

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
