import React from "react";
import FadeIn from "./FadeIn";

function About() {

  function switchVisible() {
    if (document.getElementById('about1')) {

        if (document.getElementById('about1').style.display === 'none') {
            document.getElementById('about1').style.display = 'block';
            document.getElementById('about2').style.display = 'none';
            document.getElementById('about-button').innerText = 'Away from the keyboard ⮞';
        }
        else {
            document.getElementById('about1').style.display = 'none';
            document.getElementById('about2').style.display = 'block';
            document.getElementById('about-button').innerText = '⮜ Back at the keyboard';
        }
    }
}

  return (
    <div className="about-section">
      <div className="front-clouds"></div>
      <FadeIn>
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-pic"></div>
        <div className="about-text">
          <div id="about1">
            <div className="about-intro">
              My journey began with a simple desire to understand the magic behind the websites and applications I used daily.
              The initial stages were filled with frustration and countless moments of self-doubt. I often found myself buried
              in error messages, searching tirelessly for solutions and learning from my mistakes. But with each setback, I
              grew more resilient and determined. <br/> <br/>
              With time, my skills improved, and I started to build small projects, applications, and websites that were not only
              functional but also a sources of immense pride. The thrill of creating something from scratch, of seeing an idea 
              come to life through code, was a feeling unlike any other. This journey has taught me not only about programming but 
              also about the power of self-discipline, preserverance, and the boundless possibilities that come with self-directed learning. I've come to appreciate the beauty of 
              problem-solving and the satisfaction of turning lines of code into tangible solutions. <br/><br />
              Today, I continue to explore the ever-evolving world of programming. This website is a reflection of my experiences and the knowledge I've 
              gained and I'm so happy to share it with you! <br/>
            </div>
          </div>
          <div id="about2">
            When I'm not at the computer, I love spending time in the kitchen cooking and experimenting with new food<span role="img" aria-label="Food">🍲</span>. I believe food is an amazing way to connect with others, whether its old friends or new. <br/> 
            Occasionally I will record and share recipes on my TikTok account <span class="highlight"><a href="https://www.tiktok.com/@nats_bites?lang=en">@nats_bites</a></span>. <br/><br/>
            Animals have always had a soft spot in my heart. I really enjoy being with my dog Riley<span role="img" aria-label="Dog">🐶</span> and my bird Ollie<span role="img" aria-label="Bird">🐦</span>. <br/><br/>
            Travel has always been a big part of my life and I really enjoy seeing and learning about other cultures. <br/><br/>
            When I'm winding down for bed, I love binging on a new (or old) show or reading a good book.
          </div>
          <button id="about-button" onClick={switchVisible}>Away from the keyboard &#11166; </button>
          </div>

      </div>
      </FadeIn>
    </div>
  );
}

export default About();
