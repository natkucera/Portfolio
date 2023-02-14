import React from "react";
import tictactoepic from "/home/nat/Resume/Website/Portfolio/src/tictactoe-pic.png";
import calcpic from "/home/nat/Resume/Website/Portfolio/src/calculator-pic.png";
import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';


function Projects() {

  return (
    <div className="projects">

        <div className="project-text">
            <p>I made this site from scratch using React, Material UI, JavaScript, and CSS.
                Below are a few more projects I have completed, mostly from The Odin Project that you can view.</p>
            <p>Check back to see more as I will be updating these as I go.</p>
        </div> 

        <div class="project-cards">
            <div class="card">
                <img src={calcpic} alt="calculator"/>
                <div class="card-text" id="calculator">
                    <h3>Calculator</h3>
                    <p>A calculator with basic math operators that is build with JavaScript, HTML, and CSS.. </p>
                    <div className="project-link">
                        <Button href="https://natkucera.github.io/Calculator/" startIcon={<ArrowOutwardIcon />} 
                            sx={{
                                color: "black",
                                "&:hover": { color: "#DD9FE0" }
                                }}
                        >View Project</Button>

                        <Button href="https://github.com/natkucera/Calculator" startIcon={<GitHubIcon />} 
                            sx={{
                                color: "black",
                                "&:hover": { color: "#DD9FE0" }
                                }}
                        >View Code</Button>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src={tictactoepic} alt="tictactoe"/>
                <div class="card-text" id="tictactoe">
                    <h3>Tic Tac Toe</h3>
                    <p>A two player browser game built using JavaScript, HTML, and CSS.</p>
                    <div class="project-link">
                        <Button href="https://natkucera.github.io/Tic-Tac-Toe/" startIcon={<ArrowOutwardIcon />} 
                            sx={{
                                color: "black",
                                "&:hover": { color: "#DD9FE0" }
                                }}
                        >View Project</Button>
                        <Button href="https://github.com/natkucera/Tic-Tac-Toe" startIcon={<GitHubIcon />} 
                            sx={{
                                color: "black",
                                "&:hover": { color: "#DD9FE0" }
                                }}
                        >View Code</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects();