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
          <h4 className='lead about-head text-center'> About me </h4>
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
                I am a senior year Computer Science student at VIT University,
                Chennai currently working as a{' '}
                <mark className='font-italic'>
                  Software Engineering Intern @Honeywell Inc.
                </mark>{' '}
                I enjoy being challenged and engage with projects that require
                me to work outside my comfort zone and knowledge set.
                <p className='font-italic'>
                  I am an optimist filled with curiosity trying to solve
                  problems using tech.
                </p>
                <mark></mark>
                <b className='font-weight-bolder'>Some of my interests: </b>
                Data Structures and Algorithms, System Design, Backend
                Development, Deep Learning, Mathematics and Adventure Sports.
              </p>
            </Col>
          </Row>
        </Fade>
      </div>
    );
  }
}

export default About;
