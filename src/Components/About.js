import React from "react";
import profilepic from "/home/nat/Resume/Website/Portfolio/src/profile-pic.png";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

function About() {
  return (
    <div className="about-section">
      <div className="intro">
        <img
          src={profilepic}
          className="profilepic"
          alt="profilepic"
        />
        <div className="intro-text">
          <h1>Hello,</h1> 
          <h1>I'm Natasha<span role="img" aria-label="Hand">👋</span> </h1>
          <h2>I am an enthusiastic, <span class="highlight">self-taught web developer</span> who began my journey in early 2022.</h2>
          <div className="contact">
            <Button startIcon={<EmailIcon />} 
              sx={{
                color: "black",
                "&:hover": { color: "#DD9FE0" }
                }}
            >Email</Button>

            <Button startIcon={<LinkedInIcon />} 
              sx={{
                color: "black",
                "&:hover": { color: "#DD9FE0" }
                }}
            >LinkedIn</Button>
          </div>
        </div>
      </div>
      <div className="about-text">
        <p>A little about how I started:</p>
        <p>The pandemic brought harships for me and many others. At the same time, it brought new opportunities for growth.
          After losing my job, I wanted to continue learning and started to program for fun. What started off as a small hobby,
          grew into a real passion that I wanted to take to the next level. I started learning with a mentor who guided me on where to start, while showing me
          the amazing possibilites of programming.</p> 
        <p>I'm excited to show you what I have done so far while I continue to learn and grow.</p>
      </div>
    </div>
  );
}

export default About();
