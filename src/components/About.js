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
                <p className="lead about-text">I am a senior year undergraduate at VIT University, Chennai completing my majors in Computer science. I enjoy being challenged and engage with projects that require me to work outside my comfort zone and knowledge set.
                <br/>
                <b>Some of my interests:</b> Data Structures and Algorithms, Web development, Deep Learning and Mathematics.
                <br/>
                <blockquote className="mt-3 font-italic text-center" style={{fontSize:"18px"}}><b>The idea that something I create can impact someone across the world now, or in the future is what drives my passion for Technology.</b></blockquote>
                </p>
            </Col>
            </Row>
            <Row className="">
            <Col md={4} className="text-center">
            <a className="lead cv-link shadow" href="https://bit.ly/2Z5WQAI"><b>View CV</b></a>
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
