import React, { Component } from "react";
import logo from "../../resources/img/logoNew.jpg";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "#90a4ae" }}
        >
          <NavLink to="/central-room/dashboard">
            <img
              src={logo}
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
                  to="/central-room/dashboard"
                  className="nav-link "
                  id="nav-home"
                  exact
                  activeClassName="active-nav"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/central-room/get-traffic-violators-list"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Traffic Violations
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/central-room/get-fine-details"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Fine Details
                </NavLink>
              </li>
              <li className="nav-item active ml-2">
                <NavLink
                  to="/central-room/help-request-list"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Help Requests
                </NavLink>
              </li>
              <li className="nav-item active ml-2">
                <NavLink
                  to="/central-room/get-traffic-police"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Traffic Police
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ml-2">
                <NavLink
                  to="/login-user"
                  className="nav-link "
                  id="nav-login"
                  onClick={() => {
                    localStorage.clear();
                  }}
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
