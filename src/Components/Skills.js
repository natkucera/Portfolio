import React from "react";
import FadeIn from "./FadeIn";


function Skills() {
  return (
    <div className="skills-section">
      <div className="front-clouds"></div>
      <FadeIn>
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="skills">
            <img className="skill" alt="javascript" src="https://icongr.am/devicon/javascript-plain.svg?size=100&color=c2d5fa" />
            <span class="text">javascript</span>
          </div>
          <div className="skills">
            <img className="skilll" alt="html5" src="https://icongr.am/devicon/html5-plain.svg?size=100&color=c2d5fa" />
            <span class="text">html5</span>
          </div>
          <div className="skills">
            <img className="skill" alt="css3" src="https://icongr.am/devicon/css3-plain.svg?size=100&color=c2d5fa" />
            <span class="text">css3</span>
          </div>
          <div className="skills">
            <img className="skill" alt="react" src="https://icongr.am/simple/react.svg?size=100&color=c2d5fa&colored=false"  />
            <span class="text">react</span>
          </div>
          <div className="skills">
            <img alt="typescript" src="https://icongr.am/simple/typescript.svg?size=100&color=c2d5fa&colored=false" />
            <span class="text">typescript</span>
          </div>
          <div className="skills">
            <img alt="nextjs" src="https://icongr.am/simple/nextjs.svg?size=100&color=c2d5fa&colored=false" />
            <span class="text">nextjs</span>
          </div>
          <div className="skills">
            <img alt="bootstrap" src="https://icongr.am/devicon/bootstrap-plain.svg?size=100&color=c2d5fa" />
            <span class="text">bootstrap</span>
          </div>
          <div className="skills">
            <img alt="nodejs" src="https://icongr.am/devicon/nodejs-plain.svg?size=100&color=c2d5fa" />
            <span class="text">nodejs</span>
          </div>
          <div className="skills">
            <img alt="mongodb" src="https://icongr.am/devicon/mongodb-plain.svg?size=100&color=c2d5fa" />
            <span class="text">mongodb</span>
          </div>
          <div className="skills">
            <img alt="postman" src="https://icongr.am/simple/postman.svg?size=100&color=c2d5fa&colored=false" />
            <span class="text">postman</span>
          </div>
          <div className="skills">
            <img alt="visualstudio" src="https://icongr.am/simple/visualstudio.svg?size=128&color=c2d5fa&colored=false" />
            <span class="text">visualstudio</span>
            </div>
          <div className="skills"> 
            <img alt="postman" src="https://icongr.am/material/responsive.svg?size=100&color=c2d5fa" />
            <span class="text">responsive design</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Skills();
