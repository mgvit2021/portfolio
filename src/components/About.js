import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
import Myself from '../images/Myself.jpg'
import Fade from 'react-reveal/Fade';
export class About extends Component {
    render() {
        return (
            <div className="about container" id="about">
            <Fade bottom>
            <h4 className="lead about-head text-center"> About me </h4>
            <hr className="about-line"></hr>
            <Row>
            <Col md={4}>
                <Image className="mx-auto d-block about-image" src={Myself} roundedCircle />
            </Col>
            <Col className="text-left mt-4" md={7}>
                <p className="lead about-text">I am a 3<sup>rd</sup> year undergraduate student at VIT University, Chennai completing my majors in Computer science. The idea that something I create can impact someone across the world now, or in the future is what drives my passion for Technology.
                <br/>
                <b>Some of my interests:</b> Data Structures and Algorithms, Web development, Deep Learning and Mathematics.  
                </p>
            </Col>
            </Row>
            <Row className="mt-4">
            <Col md={4} className="text-center">
            <a className="lead cv-link shadow" href="https://drive.google.com/open?id=1szRNB2uhXNUYdiibXjlWRsQuglpm9kmE"><b>View CV</b></a>
            </Col>
            
            <Col md={8}>
            </Col>
            </Row>
            </Fade>
            </div>
        )
    }
}

export default About
