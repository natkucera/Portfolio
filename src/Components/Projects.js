import React from "react";
import tictactoepic from "/home/natasha/Projects/Portfolio/src/TicTacToe.png";
import calcpic from "/home/natasha/Projects/Portfolio/src/Calculator.png";
import todopic from "/home/natasha/Projects/Portfolio/src/Todo List.png"
import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';


function Projects() {

  return (
    <div className="projects">

        <div className="project-text">
            <p>I made this site from scratch using React, Material UI, JavaScript, and CSS. I also made it mobile friendly. <br />
                <Button href="https://github.com/natkucera/Portfolio" startIcon={<GitHubIcon />} 
                    sx={{
                        color: "black",
                        "&:hover": { color: "#DD9FE0" }
                        }}
                >View Code</Button>
            </p>
            <p>Below are a few more projects I have completed, mostly from The Odin Project that you can view.</p>
            <p>Check back to see more as I will be updating these as I go.</p>
        </div> 

        <div class="project-cards">

            <div class="card">
                <div><img src={calcpic} alt="calculator"/></div>
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
                <div><img src={tictactoepic} alt="tictactoe"/></div>
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

            <div class="card">
                <div><img src={todopic} alt="todo-list"/></div>
                <div class="card-text" id="todo-list">
                    <h3>Todo List</h3>
                    <p>A Todo List application that uses localStorage to add, delete, edit, and mark tasks completed. Built with JavaScript, HTML, CSS using React and Material UI components. </p>
                    <div class="project-link">
                        <Button href="https://natkucera.github.io/Todo-List/" startIcon={<ArrowOutwardIcon />} 
                            sx={{
                                color: "black",
                                "&:hover": { color: "#DD9FE0" }
                                }}
                        >View Project</Button>
                        <Button href="https://github.com/natkucera/Todo-List" startIcon={<GitHubIcon />} 
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