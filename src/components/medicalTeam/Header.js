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
          <NavLink
            to="/medical-team/dashboard"
            className="nav-link "
            id="nav-home"
            exact
          >
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
                  to="/medical-team/dashboard"
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
                  to="/medical-team/get-medical-emergency"
                  className="nav-link"
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Medical Emergency
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/medical-team/get-ambulance"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Ambulance
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ml-2">
                <NavLink
                  to="/login-user"
                  className="nav-link "
                  id="nav-login"
                  onClick={() => localStorage.clear()}
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
