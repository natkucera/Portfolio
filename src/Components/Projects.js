import React from "react";
import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import FadeIn from "./FadeIn";


function Projects() {

  return (
    <div className="projects">
        <FadeIn>
        <div className="project-text">
            <h1>PROJECTS.</h1>
            <p>I made this mobile friendly site from scratch using React, Material UI, JavaScript, and CSS.
            Below are a few more projects I have completed.<br/> <br/>
            Check back to see more as I will be updating these as I go.</p>
        </div> 
        </FadeIn>

        <div className="project-cards">

        <FadeIn>
            <div class="card badbunch">
                <div class="info">
                    <div className="current-project">&#91;current project&#93;</div>
                    <span>A game development website made with Next.js, TypeScript, JavaScript, HTML, and CSS. A parallax scrolling effect was made using JavaScript and elements of CSS. It is also CSS edited to make it very mobile friendly.</span>
                    <div class="project-link">
                    <Button href="https://https://stare.gg" startIcon={<ArrowOutwardIcon />} 
                            sx={{
                                color: 'black',
                                "&:hover": { textDecoration: 'underline'  }
                                }}
                        >View Project</Button>
                    </div>
                </div>
                <div class="color-overlay"></div>
            </div>
            </FadeIn>

            <FadeIn>
            <div class="card calculator">
                <div class="info">
                    <span>A calculator with basic math operators that is build with JavaScript, HTML, and CSS.</span>
                    <div class="project-link">
                    <Button href="https://natkucera.github.io/Calculator/" startIcon={<ArrowOutwardIcon />} 
                            sx={{
                                color: 'black',
                                "&:hover": { textDecoration: 'underline'  }
                                }}
                        >View Project</Button>

                        <Button href="https://github.com/natkucera/Calculator" startIcon={<GitHubIcon />} 
                            sx={{
                                color: 'black',
                                "&:hover": { textDecoration: 'underline'  }
                                }}
                        >View Code</Button>
                    </div>
                </div>
                <div class="color-overlay"></div>
            </div>
            </FadeIn>

            <FadeIn>
            <div class="card tictactoe">
                <div class="info">
                    <span>A two player browser game built using JavaScript, HTML, and CSS.</span>
                    <div class="project-link">
                    <Button href="https://natkucera.github.io/Tic-Tac-Toe/" startIcon={<ArrowOutwardIcon />} 
                            sx={{
                                color:'black',
                                "&:hover": { textDecoration: 'underline' }
                                }}
                        >View Project</Button>
                        <Button href="https://github.com/natkucera/Tic-Tac-Toe" startIcon={<GitHubIcon />} 
                            sx={{
                                color: 'black',
                                "&:hover": { textDecoration: 'underline'  }
                                }}
                        >View Code</Button>
                    </div>
                </div>
                <div class="color-overlay"></div>
            </div>
            </FadeIn>

            <FadeIn>
            <div class="card todo">
                <div class="info">
                    <span>A Todo List application that uses localStorage to add, delete, edit, and mark tasks completed. Built with JavaScript, HTML, CSS using React and Material UI components.</span>
                    <div class="project-link">
                        <Button href="https://natkucera.github.io/Todo-List/" startIcon={<ArrowOutwardIcon />} 
                            sx={{
                                color: "black",
                                "&:hover": { textDecoration: 'underline' }
                                }}
                        >View Project</Button>
                        <Button href="https://github.com/natkucera/Todo-List" startIcon={<GitHubIcon />} 
                            sx={{
                                color: "black",
                                "&:hover": { textDecoration: 'underline' }
                                }}
                        >View Code</Button>
                    </div>
                </div>
                <div class="color-overlay"></div>
            </div>
            </FadeIn>

        </div>
        </div>
  );
}

export default Projects();