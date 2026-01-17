import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          One Vision Lab
        </Link>

        {/* NAV LINKS */}
        <ul className="navbar-links">

          {/* SERVICES */}
          <li
            className="nav-item has-dropdown"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span>Services</span>
            {openMenu === "services" && (
              <ul className="dropdown">
                <li><Link to="/services">Website Development</Link></li>
                <li><Link to="/services">AI-Driven Websites</Link></li>
                <li><Link to="/services">Computer Vision (Annotations)</Link></li>
              </ul>
            )}
          </li>

          {/* TRAINING */}
          <li
            className="nav-item has-dropdown"
            onMouseEnter={() => setOpenMenu("training")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span>Training</span>
            {openMenu === "training" && (
              <ul className="dropdown">
                <li><Link to="/training/cloud">Cloud Computing</Link></li>
                <li><Link to="/training/databases">Databases</Link></li>
                <li><Link to="/training/ai">AI & ML</Link></li>
              </ul>
            )}
          </li>

          {/* STOCK ANALYSIS */}
          <li
            className="nav-item has-dropdown"
            onMouseEnter={() => setOpenMenu("stocks")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span>Stock Analysis</span>
            {openMenu === "stocks" && (
              <ul className="dropdown">
                <li><Link to="/stocks/weekly">Weekly Analysis</Link></li>
                <li><Link to="/stocks/statistics">Statistical Analysis</Link></li>
                <li><Link to="/stocks/reports">Market Reports</Link></li>
              </ul>
            )}
          </li>

          {/* INSIGHTS */}
          <li className="nav-item">
            <Link to="/insights">Insights</Link>
          </li>

          {/* ABOUT */}
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>

          {/* CONTACT */}
          <li className="nav-item">
            <Link to="/contact" className="contact-btn">
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
