import React from "react";
import Auth from "../../utils/auth";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-list flex-row">
          <li className=" mx-1">
            <Link to="/orderHistory">Orders</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Link to="/about">About</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row nav-list">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-1">
            <Link to="/about">About</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <div className="logo">
        <Link to="/">
          <img className="logo-image" src={logo} alt="React Retreat" />
          <h1 className="logo-name">BLOCKBUSTER VIDEO</h1>
        </Link>
      </div>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
