import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


export default class Navbar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };
  

  render() {
    return (
      <nav className="nav" id="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              activeClass="active"
              to="extra"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Extra
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
