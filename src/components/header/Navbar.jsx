import "../styles/navbar.css";
import React from "react";
import { FaSearch, FaTrain } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            InstantPNR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaTicket className="react-icon" />
                  PNR Status
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaTrain className="react-icon" />
                  Train Status
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaSearch className="react-icon" />
                  Train Finder
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
