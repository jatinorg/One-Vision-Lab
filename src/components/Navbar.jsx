import { Link, NavLink } from "react-router-dom";
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
          {/* HOME */}
          <li className="nav-item">
            <NavLink to="/" end className="nav-link">Home</NavLink>
          </li>

          {/* SERVICES */}
          <li
            className="nav-item has-dropdown"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="nav-link">Services</span>
            {openMenu === "services" && (
              <ul className="dropdown">
                <li><Link to="/services/ai-driven-websites">AI-Driven Websites</Link></li>
                <li><Link to="/computer-vision">Computer Vision</Link></li>
                <li><Link to="/services/intelligent-solutions">Intelligent Solutions</Link></li>
              </ul>
            )}
          </li>

          {/* PRODUCTS */}
          <li className="nav-item">
            <NavLink to="/Products" className="nav-link">Products</NavLink>
          </li>

          {/* BLOG */}
          <li className="nav-item">
            <NavLink to="/Blog" className="nav-link">Blog</NavLink>
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
