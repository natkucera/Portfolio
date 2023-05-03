import React from "react";
import FadeIn from "./FadeIn";

function About() {
  return (
    <div className="about-section">
      <div className="front-clouds"></div>
      <FadeIn>
      <div className="about-content">
        <div className="about-text">
          <h1>ABOUT ME.</h1>
          <p>The pandemic brought harships for me and many others. At the same time, it brought new opportunities for growth.
            After losing my job, I wanted to continue learning and started to program for fun. What started off as a small hobby,
            grew into a real passion that I wanted to take to the next level. I started learning with a mentor who guided me on where to start, while showing me
            the amazing possibilites of programming. <br/><br />
          I'm excited to show you what I have done so far while I continue to learn and grow.</p> 
        </div>
      </div>
      </FadeIn>
    </div>
  );
}

export default About();
