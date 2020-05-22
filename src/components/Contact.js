import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
export default function Contact() {
    return (
        <Container className="contact mt-4" id="contact">
                <h4 className="contact-head lead text-center mt-4">Let's Connect</h4>
                <hr className="about-line"/>
            <Row className=" text-center">
            <Col md={12}><a href="mailto:mridul.gupta2021@gmail.com"><i className="mail-icon far fa-envelope"></i></a><span className="ml-2">mridul.gupta2021@gmail.com</span></Col>
            </Row>
            <Row className="mt-4">
            <div className="mx-auto icon-set">
                <a href="https://www.facebook.com/mridul108" target="_blank" rel="noopener noreferrer" className="m-4"><i className="icon fab fa-facebook"></i></a>
                <a href="https://github.com/mgvit2021" target="_blank" rel="noopener noreferrer" className="m-4"><i className="icon fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mridul-gupta2021" target="_blank" rel="noopener noreferrer" className="m-4"><i className="icon fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/mridul_gupta_/" target="_blank" rel="noopener noreferrer" className="m-4"><i className="icon fab fa-instagram"></i></a>
            </div>
            </Row>
        </Container>
    )
}
