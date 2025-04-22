import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <div className="m-0">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            InstantPNR
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <span className="bi bi-info-circle me-1"></span>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/terms-conditions">
                  <span className="bi bi-file-earmark-text me-1"></span>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
