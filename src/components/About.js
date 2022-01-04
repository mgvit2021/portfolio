import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Myself from '../images/Myself.jpg';
import Fade from 'react-reveal/Fade';
export class About extends Component {
  render() {
    return (
      <div className='about container p-5' id='about'>
        <Fade bottom>
          <h4 className='lead about-head text-center'> About Me </h4>
          <hr className='about-line'></hr>
          <Row>
            <Col md={4}>
              <Image
                className='mx-auto d-block about-image'
                src={Myself}
                roundedCircle
              />
            </Col>
            <Col className='text-left mt-4' md={7}>
              <p className='lead about-text'>
              Experienced Software Engineer with a demonstrated history of working 
              in the internet industry.<br/>
              Skilled in Node.js, Spring Boot, Java, JavaScript, and Python. 
              <br/>
              Strong engineering professional with a Bachelor of Technology 
              focused in Computer Science from Vellore Institute Of Technology, Chennai 
              currently working as a{' '}
                <mark className='font-italic'>
                  Software Engineer 1 @Honeywell Inc.
                </mark>
                <br/>
                <br/>
                <b className='font-weight-bolder'>Some of my interests: </b>
                System Design, Backend Development, Problem solving, 
                System Architecture, and Adventure Sports.
              </p>
            </Col>
          </Row>
        </Fade>
      </div>
    );
  }
}

export default About;
