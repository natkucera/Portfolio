import React from "react";
import tictactoepic from "/home/nat/Resume/Website/Portfolio/src/tic-tac-toe-pic.png";
import calcpic from "/home/nat/Resume/Website/Portfolio/src/calculator-pic.png"

function Projects() {

  return (
    <div className="projects">

        <div className="project-text">
            <p>I made this site from scratch using React, Material UI, JavaScript, and CSS.
                Below are a few more projects I have completed, mostly from The Odin Project that you can view.</p>
            <p>Check back to see more as I will be updating these as I go.</p>
        </div> 

        <div class="project-cards">

            <div class="card" id="calculator">
                <img src={calcpic} alt="calculator"/>
                <div class="card-text">
                    <h3>Calculator</h3>
                    <p>A calculator with basic math operators that is build with JavaScript, HTML, and CSS.. </p>
                    <div class="project-link"><a href="https://natkucera.github.io/Calculator/">View Project</a></div>
                </div>
            </div>

            <div class="card" id="tictactoe">
                <img src={tictactoepic} alt="tictactoe"/>
                <div class="card-text">
                    <h3>Tic Tac Toe</h3>
                    <p>A 2 player browser game built using JavaScript, HTML, and CSS.</p>
                    <div class="project-link"><a href="https://natkucera.github.io/Tic-Tac-Toe/">View Project</a></div>
                </div>
            </div>

        </div>

    </div>
  );
}

export default Projects();