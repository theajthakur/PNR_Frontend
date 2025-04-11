import "../styles/navbar.css";
import React from "react";
import { FaSearch, FaTrain } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            InstantPNR
          </a>
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
