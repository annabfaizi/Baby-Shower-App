import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="w3-top w3-hide-small">
    <div className="w3-bar w3-white w3-center w3-opacity-min w3-hover-opacity-on">
      <div className="w3-bar-item w3-button nav-btn-width">
          <div className={location.pathname === "/" && "active"}>
            <Link to="/">HOME</Link>
          </div>
      </div>

      <div className="nav-btn-width w3-bar-item w3-button">
          <div className={location.pathname === "/shower" && "active"}>
            <Link to="/shower">SHOWER</Link>
          </div>
      </div>

      <div className="nav-btn-width w3-bar-item w3-button">
          <div className={location.pathname === "/details" && "active"}>
            <Link to="/details">DETAILS</Link>
          </div>
      </div>

      <div className=" nav-btn-width w3-bar-item w3-button">
          <div className={location.pathname === "/rsvp" && "active"}>
            <Link to="/rsvp">RSVP</Link>
          </div>
      </div>
    </div>
  </nav>
);

export default Navbar;