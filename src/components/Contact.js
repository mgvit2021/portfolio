import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import email from '../icons/email.svg'
import facebook from '../icons/facebook.svg'
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'
import instagram from '../icons/instagram.svg'
import Fade from 'react-reveal/Fade';

export default function Contact() {
    return (
        <Container className="contact mt-4" id="contact">
                <Fade bottom>
                <h4 className="contact-head lead text-center mt-4">Let's Connect</h4>
                <hr className="about-line"/>
            <Row className=" text-center mt-5">
            <Col md={12}><a href="mailto:mridul.gupta2021@gmail.com"><img className="icon" src={email} alt="facebook"></img></a><span className="ml-2">mridul.gupta2021@gmail.com</span></Col>
            </Row>
            <Row className="mt-5">
            <div className="mx-auto icon-set">
                <a href="https://www.facebook.com/mridul108" target="_blank" className="mr-3"><img className="icon" src={facebook} alt="facebook"></img></a>
                <a href="https://github.com/mgvit2021" target="_blank" className="mr-3"><img className="icon" src={github} alt="facebook"></img></a>
                <a href="https://www.linkedin.com/in/mridul-gupta2021" target="_blank" className="mr-3"><img className="icon" src={linkedin} alt="facebook"></img></a>
                <a href="https://www.instagram.com/mridul_gupta_/" target="_blank" ><img className="icon" src={instagram} alt="facebook"></img></a>
            </div>
            </Row>
            </Fade>
        </Container>
    )
}
