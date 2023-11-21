import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
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
                <Button href="https://github.com/natkucera" startIcon={<GitHubIcon />} 
                sx={{
                    fontSize: 14,
                    color: "black",
                    "&:hover": { fontWeight: "bold" }
                    }}
                >Github</Button>

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




