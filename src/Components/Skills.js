import { Grid, Chip } from "@mui/material";
import React from "react";

const chipStyle = {
  border: "solid 1px black",
  borderRadius: 5,
  backgroundColor: "#f0afdd",
  fontSize: "15px",
  padding: "5px",
  margin: "5px",
}

function Skills() {
  return (
    <div className="skills-section">
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
  );
}

export default Skills();
