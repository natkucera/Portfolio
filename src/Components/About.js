import React from "react";
import FadeIn from "./FadeIn";

function About() {

  function switchVisible() {
    if (document.getElementById('about1')) {

        if (document.getElementById('about1').style.display === 'none') {
            document.getElementById('about1').style.display = 'block';
            document.getElementById('about2').style.display = 'none';
            document.getElementById('about-button').innerText = 'Away from the keyboard >';
        }
        else {
            document.getElementById('about1').style.display = 'none';
            document.getElementById('about2').style.display = 'block';
            document.getElementById('about-button').innerText = '< Back at the keyboard';
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
            When I'm not diving into lines of code, you'll often find me in the kitchen, experimenting with flavors and concocting new recipes. <span role="img" aria-label="Food">🍲</span>
            Cooking isn't just a hobby; it's my creative outlet—a place where I find joy in blending ingredients much like I do with lines of code. <br/> 
            Occasionally I will record, edit, and share recipes with others on my TikTok account <span class="highlight"><a href="https://www.tiktok.com/@nats_bites?lang=en">@nats_bites</a></span>. I love teaching others that
            cooking can be easy and enjoyable. <br/><br/>
            At home, I share my space with two amazing companions. My sassy bird Ollie <span role="img" aria-label="Bird">🐦</span>, and my sweet dog Riley<span role="img" aria-label="Dog">🐶</span>, who is always up for an adventure,
            nudging me to step away from the screen and play or go on a nice long walk outdoors. <br/><br/>
            As much as I love crafting digital solutions and unraveling complex problems, I also cherish the simpler moments - 
            savoring a homemade meal, watching a new (or old) show, or catching up with friends. Balancing my passion for technology with these
            delightful facets of life keeps me grounded and fuels my creativity in unexpected ways.  
          </div>
          <button id="about-button" onClick={switchVisible}>Away from the keyboard &#11166; </button>
          </div>

      </div>
      </FadeIn>
    </div>
  );
}

export default About();
