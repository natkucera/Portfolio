import React from "react";
import { Grid } from "@mui/material";

function Projects() {

  return (
    <div className="project-cards">

        <Grid container spacing={4} columns={8} justifyContent="space-evenly">
            <Grid item xs={8} >
                <div className="project-text">
                <p>I made this site from scratch using React's create app, Material UI, JavaScript, and CSS.
                    Below are a few more projects I have completed, mostly from The Odin Project that you can view.</p>
                <p>Check back to see more as I will be updating these as I go.</p>
                </div> 
            </Grid>

            <Grid item xs={3}>
                <div class="card">
                    <img src="https://picsum.photos/id/404/367/267" alt=""/>
                    <h3>Calculator</h3>
                    <div class="focus-content">
                        <p>A calculator with basic math operators that is build with JavaScript, HTML, and CSS..<br/> <a href="www.fb.com">View Project</a>
                        </p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={3}>
                <div class="card">
                    <img src="https://picsum.photos/id/404/367/267" alt=""/>
                    <h3>Library</h3>
                    <div class="focus-content">
                        <p>Library site that allows you to add books with details, mark if you have read it, and save for future use.<br/> <a href="www.fb.com">View Project</a>
                        </p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={3}>
                <div class="card">
                    <img src="https://picsum.photos/id/404/367/267" alt=""/>
                    <h3>Tic Tac Toe</h3>
                    <div class="focus-content">
                        <p>A browser game that allows the user to select 2 player or play with a computer. Built using JavaScript, HTML, and CSS.<br/> <a href="www.fb.com">View Project</a>
                        </p>
                    </div>
                </div>
            </Grid>
            
            <Grid item xs={3}>
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