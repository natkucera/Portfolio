import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';


export default function Intro() {
    return (
    <div className="intro">
        <div className="intro-title">
            <h1 className="hello">Hello, I'm Natasha.</h1>
        </div>
        <div className="intro-text">
            <h2>An enthusiastic, <span class="highlight">self-taught web developer</span></h2>
        </div>
        <div className="contact">
                <Button href="mailto:kucera.nat@gmail.com" startIcon={<MailIcon />} 
                sx={{
                    fontSize: 14,
                    color: "black",
                    "&:hover": { fontWeight: "bold" }
                    }}
                >kucera.nat@gmail.com</Button>

                <Button href="https://www.linkedin.com/in/natasha-kucera-62335224a/" startIcon={<LinkedInIcon />} 
                sx={{
                    fontSize: 14,
                    color: "black",
                    "&:hover": { fontWeight: "bold" }
                    }}
                >LinkedIn</Button>
            </div>
    </div>
    );
  }




