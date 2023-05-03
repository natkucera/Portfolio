import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Extra from "./Components/Extra";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <div className="content">
          <Section
            subtitle={About}
            id="aboutme"
            className="child"
          />

          <Section
            subtitle={Projects}
            id="projects"
            className="child"
          />

          <Section
            subtitle={Skills}
            id="skills"
            className="child"
          />

          <Section
            subtitle={Extra}
            id="extra"
            className="child"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
