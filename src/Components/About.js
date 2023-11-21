import React from "react";
import FadeIn from "./FadeIn";

function About() {
  return (
    <div className="about-section">
      <div className="front-clouds"></div>
      <FadeIn>
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-pic"></div>
        <div className="about-text"> 
            My journey began with a simple desire to understand the magic behind the websites and applications I used daily.
            The initial stages were filled with frustration and countless moments of self-doubt. I often found myself buried
            in error messages, searching tirelessly for solutions and learning from my mistakes. But with each setback, I
            grew more resilient and determined. <br/><br/>
            With time, my skills improved, and I started to build small projects, applications, and websites that were not only
            functional but also a sources of immense pride. The thrill of creating something from scratch, of seeing an idea 
            come to life through code, was a feeling unlike any other. This journey has taught me not only about programming but 
            also about the power of self-discipline, preserverance, and the boundless possibilities that come with self-directed learning. I've come to appreciate the beauty of 
            problem-solving and the satisfaction of turning lines of code into tangible solutions. <br/><br />
            Today, I continue to explore the ever-evolving world of programming. The pandemic may have been a catalyst, but 
            my passion for coding remains unwavering. This website is a reflection of my experiences and the knowledge I've 
            gained and I'm so happy to share it with you!
        </div>
      </div>
      </FadeIn>
    </div>
  );
}

export default About();
