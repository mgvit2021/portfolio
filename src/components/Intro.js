import React, { Component } from 'react'
import {Jumbotron,Container} from 'react-bootstrap'
import ReactRotatingText  from 'react-rotating-text'
import ParticlesBg from "particles-bg";
// "color"
// "ball"
// "lines"
// "thick"
// "circle"
// "cobweb"
// "polygon"
// "square"
// "tadpole"
// "fountain"
export class Intro extends Component {
    render() {
        return (
            <Container id="intro" className="intro" fluid={true}>
            <ParticlesBg color="#8753cc" type="cobweb" bg={true}/>
                <Jumbotron fluid={true} className="text-center jumbo-intro">
                        <p className = "lead">Mridul Gupta</p>
                        <ReactRotatingText className="type-effect lead" items={['Software Developer','Full Stack Developer','ML Engineer']} />
                </Jumbotron>
            </Container>
        )
    }
}

export default Intro