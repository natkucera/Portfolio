import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import profilepic from "/home/nat/Resume/Website/Portfolio/src/IMG_2857.PNG";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";


export default class Navbar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };
  

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={profilepic}
            className="profilepic"
            alt="profilepic"
            onClick={this.scrollToTop}
          />

          <div className="name">Natasha Kucera</div>
            <div className="contact">
              <Button startIcon={<EmailIcon />} 
                sx={{
                  color: "black",
                  "&:hover": { color: "#DD9FE0" }
                  }}
              >kucera.nat@gmail.com</Button>

              <Button startIcon={<LinkedInIcon />} 
                sx={{
                  color: "black",
                  "&:hover": { color: "#DD9FE0" }
                  }}
              >LinkedIn</Button>
            </div>

            <Divider color="#DD9FE0" style={{width:"80%"}} />

          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
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
        </div>
      </nav>
    );
  }
}
