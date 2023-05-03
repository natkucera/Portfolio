import { Grid, Chip } from "@mui/material";
import React from "react";
import FadeIn from "./FadeIn";

const chipStyle = {
  border: "solid 1px black",
  borderRadius: 5,
  backgroundColor: "#fde6dd",
  fontSize: "20px",
  padding: "10px",
  margin: "10px",
}

function Skills() {
  return (
    <div className="skills-section">
      <div className="cloud-border"></div>
      <FadeIn>
        <h1>Skills.</h1>
        <div className="skills-content">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <h4>Languages & Frameworks</h4>
              <Chip sx={ chipStyle } label="HTML" />
              <Chip sx={ chipStyle } label="JavaScript" />
              <Chip sx={ chipStyle } label="CSS" />
              <Chip sx={ chipStyle } label="React" />
              <Chip sx={ chipStyle } label="Python" />
              <Chip sx={ chipStyle } label="SQL" />
              <Chip sx={ chipStyle } label="C" />
              <Chip sx={ chipStyle } label="NodeJS" />
              <Chip sx={ chipStyle } label="TypeScript" />
          </Grid>
          <Grid item xs={6}>
            <h4>Soft Skills</h4>
              <Chip sx={ chipStyle } label="Communication" />
              <Chip sx={ chipStyle } label="Teamwork" />
              <Chip sx={ chipStyle } label="Problem-solving" />
              <Chip sx={ chipStyle } label="Adaptability" />
              <Chip sx={ chipStyle } label="Creativity" />
              <Chip sx={ chipStyle } label="Dependability" />
              <Chip sx={ chipStyle } label="Patience" />
          </Grid>
        </Grid>
        </div>
      </FadeIn>
    </div>
  );
}

export default Skills();
