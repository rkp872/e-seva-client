import React, { Component } from "react";
import logoNew from "../../resources/img/logoNew.jpg";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "#90a4ae" }}
        >
          <NavLink
            to="/traffic-police/dashboard"
            className="nav-link "
            id="nav-home"
            exact
          >
            <img
              src={logoNew}
              alt="ESeva"
              style={{ height: "59px", margin: "3px 6px", borderRadius: "8px" }}
            ></img>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active ml-5">
                <NavLink
                  to="/traffic-police/dashboard"
                  className="nav-link"
                  id="nav-home"
                  exact
                  activeClassName="active-nav"
                >
                  <span className="sr-only">(current)</span>Home
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/traffic-police/register-traffic-violation"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Register Traffic Violation
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/traffic-police/register-medical-emergency"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Register Medical Emergency
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/traffic-police/register-sos-request"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  SOS Request
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/traffic-police/help-request"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Help Request
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ml-2">
                <NavLink
                  to="/traffic-police/profile"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item active ml-2">
                <NavLink
                  onClick={() => {
                    localStorage.clear();
                  }}
                  to="/login-user"
                  className="nav-link"
                  id="nav-login"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
