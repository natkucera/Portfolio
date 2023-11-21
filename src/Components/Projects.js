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
            <h1>Projects</h1>
        </div> 
        </FadeIn>

        <div className="project-cards">
        
        <FadeIn>
        <div className="cards-container">


            <div className="card-image" id="badbunch-card"></div>
            <div className="card-text">
                <h2>Badbunch Website</h2>
                A game development website. <br/><br/>
                Built with Next.js, TypeScript, JavaScript, HTML, and CSS. <br/><br/>
                <span className="card-links">
                    <Button href="https://stare.gg" startIcon={<ArrowOutwardIcon />} 
                                sx={{
                                    color: 'black',
                                    "&:hover": { textDecoration: 'underline'  }
                                    }}
                    >View Project</Button>
                </span>
            </div>

            <div className="card-image" id="todo-card"></div>
            <div className="card-text">
                <h2>ToDo List</h2>
                A Todo List application that uses localStorage to add, delete, edit, and mark tasks completed. <br/> <br/>
                Built with JavaScript, HTML, CSS using React and Material UI components <br/> <br/>
                <span className="card-links">
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
                </span>
            </div>

            <div className="card-image" id="calculator-card"></div>
            <div className="card-text">
                <h2>Calculator</h2>
                A calculator with basic math operators. <br/><br/>
                Built with JavaScript, HTML, and CSS. <br/><br/>
                <span className="card-links">
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
                </span>
            </div>

            <div className="card-image" id="tictactoe-card"></div>
            <div className="card-text">
                <h2>Tic Tac Toe Game</h2>
                A two player browser game <br/> <br/>
                Built using JavaScript, HTML, and CSS. <br/><br/>
                <span className="card-links">
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
                </span>
            </div>

        </div>
        </FadeIn>
        </div>
        </div>
  );
}

export default Projects();