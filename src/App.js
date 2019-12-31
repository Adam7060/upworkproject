import React from "react";
import topLogo from "./images/top-logo.png";
import dotted from "./images/dotted.png";
import layerOne from "./images/Layer-one.png";
import layerTwo from "./images/Layer-two.png";

import "./App.css";

const App = () => (
  <div className="app">
    <header>
      <img src={topLogo} />
      <nav>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Location</li>
          <li>Book</li>
        </ul>
      </nav>
    </header>

    <div className="section-left">
      <h1>
        Free Online Diabetes <span>Classes</span> for everyone
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuvr adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
    </div>
    <br />
    <div className="bottom-section">
      <div className="layered-images">
        <img src={layerOne} className="layer-one" />
        <img src={layerTwo} className="layer-two" />
      </div>
      <img src={dotted} className="btm-dotted" />
    </div>
  </div>
);

export default App;
