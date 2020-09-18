import React from "react";
import { Container, Row } from "react-bootstrap";
import About from "./components/About";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import NavbarHead from "./components/NavbarHead";
import Contact from "./components/Contact";
import MyTimeline from "./components/MyTimeline";

import "./App.css";
function App() {
  return (
    <Container fluid={true}>
      <NavbarHead />
      <Row>
        <Intro />
      </Row>
      <Row>
        <About />
      </Row>
      <Row>
        <Projects />
      </Row>
      <Row>
        <MyTimeline />
      </Row>
      <Row>
        <Contact />
      </Row>
    </Container>
  );
}

export default App;
