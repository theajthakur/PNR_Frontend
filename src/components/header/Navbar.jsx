import { Link } from "react-router-dom";
import "../styles/navbar.css";
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
                <Link className="nav-link" to={"/PNR_Frontend/about"}>
                  <span className="bi bi-info-circle"></span>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/PNR_Frontend/terms-conditions"}
                >
                  <span className="bi bi-file-earmark-text"></span>
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
