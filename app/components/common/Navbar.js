import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav className="w3-bottom w3-hide-small">
    <div className="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
      <div style="width:25%" className="w3-bar-item w3-button">
          <div className={location.pathname === "/" && "active"}>
            <Link to="/">HOME</Link>
          </div>
      </div>

      <div style="width:25%" className="w3-bar-item w3-button">
          <div className={location.pathname === "/shower" && "active"}>
            <Link to="/shower">SHOWER</Link>
          </div>
      </div>

      <div style="width:25%" className="w3-bar-item w3-button">
          <div className={location.pathname === "/details" && "active"}>
            <Link to="/details">DETAILS</Link>
          </div>
      </div>

      <div style="width:25%" className="w3-bar-item w3-button w3-hover-black">
          <div className={location.pathname === "/rsvp" && "active"}>
            <Link to="/rsvp">RSVP</Link>
          </div>
      </div>
    </div>
  </nav>
);

export default Navbar;