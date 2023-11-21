import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import Hamburger from 'hamburger-react';


export default function Navbar() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    return (
      <nav className="nav" id="navbar">
        <div className="name-logo">N | K</div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >About Me</Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Skills</Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Projects</Link>
              </li>
              
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="extra"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Extra</Link>
              </li>
            </ul>

        </div>
      </nav>
    );
  }
