import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';
import NavbarHead from './components/NavbarHead';
import Contact from './components/Contact';
import MyTimeline from './components/MyTimeline';
import Zoom from 'react-reveal/Zoom';
import './App.css';

function App() {
  const [isSplash, setSplash] = useState('');
  const waveEmoji = String.fromCodePoint('0x1F44B');
  const rocketEmoji = String.fromCodePoint('0x1F680');
  // splash screen for portfolio
  useEffect(() => {
    setTimeout(() => {
      setSplash(() => 'display-none');
    }, 3100);
    console.log(
      `Hey, glad to see a curious developer ${waveEmoji}, Let's connect ${rocketEmoji} ${rocketEmoji}`
    );
  }, []);
  return (
    <Container fluid={true}>
      {/**
       * Splash screen template
       */}
      <div className={`splash ${isSplash}`}>
        <Zoom left cascade>
          <h1 className='fade-in'>Hey! Welcome to my Portfolio</h1>
        </Zoom>
      </div>
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
