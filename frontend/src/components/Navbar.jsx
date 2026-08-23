// src/components/Navbar.jsx
// Practical Concept: Practical 1 & Practical 2 (Functional Components & React Router NavLink)

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo / Application Title */}
        <NavLink to="/" className="nav-logo">
          📅 Event Manager
        </NavLink>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "nav-link admin-btn active" : "nav-link admin-btn"
              }
            >
              Admin Panel ⚡
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
