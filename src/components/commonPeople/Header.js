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
          <img
            src={logo}
            alt="ESeva"
            style={{ height: "59px", margin: "3px 6px", borderRadius: "8px" }}
          ></img>

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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active ml-5">
                <NavLink
                  to="/common-people/dashboard"
                  className="nav-link"
                  id="nav-home"
                  exact
                  activeClassName="active-nav"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/common-people/my-offense"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  My Offense
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/common-people/find-violation"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Find Violation
                </NavLink>
              </li>

              <li className="nav-item active ml-2">
                <NavLink
                  to="/common-people/track-payment"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Track Payment
                </NavLink>
              </li>
              <li className="nav-item active ml-2">
                <NavLink
                  to="/common-people/register-medical-emergency"
                  className="nav-link "
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Register Medical Emergency
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ml-2">
                <NavLink
                  to="/common-people/profile"
                  className="nav-link"
                  id="nav-login"
                  activeClassName="active-nav"
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item active ml-2">
                <NavLink
                  to="/login-user"
                  className="nav-link"
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
