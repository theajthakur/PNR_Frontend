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
                <a className="nav-link" href="#">
                  <span className="bi bi-ticket"></span>
                  PNR Status
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="bi bi-train-freight-front"></span>
                  Train Status
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="bi bi-search"></span>
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
