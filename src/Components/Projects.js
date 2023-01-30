import React from "react";
import { Grid } from "@mui/material";

function Projects() {

  return (
    <div className="project-cards">

        <Grid container spacing={4}>
            <Grid item xs={12} >
                <div className="project-text">
                These are some of the projects I have done so far. Hope to add more in the future
                </div> 
            </Grid>

            <Grid item xs={6}>
                <div class="card">
                    <img src="https://picsum.photos/id/404/367/267" alt=""/>
                    <h3>Calculator</h3>
                    <div class="focus-content">
                        <p>A calculator with basic math operators that is build with JavaScript, HTML, and CSS..<br/> <a href="www.fb.com">View Project</a>
                        </p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={6}>
                <div class="card">
                    <img src="https://picsum.photos/id/404/367/267" alt=""/>
                    <h3>Library</h3>
                    <div class="focus-content">
                        <p>Library site that allows you to add books with details, mark if you have read it, and save for future use.<br/> <a href="www.fb.com">View Project</a>
                        </p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={6}>
                <div class="card">
                    <img src="https://picsum.photos/id/404/367/267" alt=""/>
                    <h3>Tic Tac Toe</h3>
                    <div class="focus-content">
                        <p>A browser game that allows the user to select 2 player or play with a computer. Built using JavaScript, HTML, and CSS.<br/> <a href="www.fb.com">View Project</a>
                        </p>
                    </div>
                </div>
            </Grid>
            
            <Grid item xs={6}>
                <div class="card">
                    <img src="https://picsum.photos/id/404/367/267" alt=""/>
                    <h3>Calculator</h3>
                    <div class="focus-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is what i used language lanugag.<br/> <a href="www.fb.com">View Project</a>
                        </p>
                    </div>
                </div>
            </Grid>
        </Grid> 
    </div>
  );
}

export default Projects();