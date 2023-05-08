import { Chip } from "@mui/material";
import React from "react";
import FadeIn from "./FadeIn";

const chipStyle = {
  border: "solid 2px black",
  borderRadius: 5,
  backgroundColor: "#fde6dd",
  fontSize: "20px",
  padding: "10px",
  margin: "20px",
}

function Skills() {
  return (
    <div className="skills-section">
      <div className="front-clouds"></div>
      <FadeIn>
        <h1>Skills.</h1>
        <div className="skills-content">
          <div>
            <h2>Languages & Frameworks</h2>
              <Chip sx={ chipStyle } label="HTML" />
              <Chip sx={ chipStyle } label="JavaScript" />
              <Chip sx={ chipStyle } label="CSS" />
              <Chip sx={ chipStyle } label="React" />
              <Chip sx={ chipStyle } label="Python" />
              <Chip sx={ chipStyle } label="SQL" />
              <Chip sx={ chipStyle } label="C" />
              <Chip sx={ chipStyle } label="NodeJS" />
              <Chip sx={ chipStyle } label="TypeScript" />
          </div>
          <div>
            <h2>Soft Skills</h2>
              <Chip sx={ chipStyle } label="Communication" />
              <Chip sx={ chipStyle } label="Teamwork" />
              <Chip sx={ chipStyle } label="Problem-solving" />
              <Chip sx={ chipStyle } label="Adaptability" />
              <Chip sx={ chipStyle } label="Creativity" />
              <Chip sx={ chipStyle } label="Dependability" />
              <Chip sx={ chipStyle } label="Patience" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Skills();
