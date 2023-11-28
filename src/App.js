import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";


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
            subtitle={Skills}
            id="skills"
            className="child"
          />


          <Section
            subtitle={Projects}
            id="projects"
            className="child"
          />

          <Section
            subtitle={Contact}
            id="contact"
            className="child"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
