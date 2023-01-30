import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Extra from "./Components/Extra";
import { Divider } from "@mui/material";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="sections">
        <Section
          title="Hello, my name is Natasha👋"
          subtitle={About}
          id="aboutme"
          className="child"
          main={true}
        />
        <Divider color="#DD9FE0" />
        <Section
          title="Projects"
          subtitle={Projects}
          id="projects"
          className="child"
        />
        <Divider color="#DD9FE0" />
        <Section
          title="Skills"
          subtitle={Skills}
          id="skills"
          className="child"
        />
        <Divider color="#DD9FE0" />
        <Section
          title="Extra"
          subtitle={Extra}
          id="extra"
          className="child"
        />
        </div>
      </div>
    );
  }
}

export default App;
