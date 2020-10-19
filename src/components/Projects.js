import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import SIHImage from "../images/SIHImage.jpeg";
import Developer from "../images/dev.png";
import PMS from "../images/PMS.svg";
import Cloak from "../images/Cloak.gif";
import Course from "../images/Course.jpg";
import Fade from "react-reveal/Fade";
import Covid from "../images/covid.jpeg";

export class Projects extends Component {
  render() {
    return (
      <Container className='p-5' id='projects' style={{ alignItems: "center" }}>
        <Fade bottom>
          <h2 className='project-head lead text-center'>Projects</h2>
          <hr className='about-line'></hr>
          <Row className='mt-4'>
            <Col xs={12} md={4} className='d-flex'>
              <Card
                className='proj-card flex-fill mt-4'
                style={{ width: "18rem" }}
              >
                <Card.Img className='img-ht' variant='top' src={Covid} />
                <Card.Body>
                  <Card.Title>Covid-19 Tracker</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    React.js|Chart.js
                  </Card.Subtitle>
                  <Card.Text>
                    An application built using React.js to track real-time
                    statistics of countries affected by COVID-19.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                  <Card.Link href='https://github.com/mgvit2021/covid-19-tracker'>
                    GitHub
                  </Card.Link>
                  <Card.Link href='https://mgvit2021.github.io/covid-19-tracker'>
                    Application
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} md={4} className='d-flex'>
              <Card
                className='proj-card flex-fill mt-4'
                style={{ width: "18rem" }}
              >
                <Card.Img className='img-ht' variant='top' src={PMS} />
                <Card.Body>
                  <Card.Title>Product Management API</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    REST API|Node.js|Swagger
                  </Card.Subtitle>
                  <Card.Text>
                    A generic Product Management API built using Express and
                    NodeJs, which can be integrated by any application to ease
                    the difficulty of managing products.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                  <Card.Link href='https://github.com/mgvit2021/Product-Management-API'>
                    GitHub
                  </Card.Link>
                  <Card.Link href='https://app.swaggerhub.com/apis/mgvit2021/ProductManagementSystemAPI/1.0.0'>
                    Swagger Hub
                  </Card.Link>
                  <Card.Link href='https://pms-api-v1.herokuapp.com'>
                    API
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} md={4} className='d-flex'>
              <Card
                className='proj-card flex-fill mt-4'
                style={{ width: "18rem" }}
              >
                <Card.Img className='img-ht' variant='top' src={SIHImage} />
                <Card.Body>
                  <Card.Title>Elderly Care System</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Smart India Hackathon|PoseNet|AWS
                  </Card.Subtitle>
                  <Card.Text>
                    Problem given by AWS India, was to build a monitoring system
                    that could be installed in an old age home to make it easy
                    for the caretakers to act quickly in case of emergencies.
                    <br />
                    <b>We Won the internal hackathon.</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col xs={12} md={4} className='d-flex'>
              <Card
                className='proj-card flex-fill mt-4'
                style={{ width: "18rem" }}
              >
                <Card.Img className='img-ht' variant='top' src={Course} />
                <Card.Body>
                  <Card.Title>Coursify</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Node.js|Express|Bootstrap
                  </Card.Subtitle>
                  <Card.Text>
                    Coursify is a course management NodeJS-application that
                    offers an interface for students to subscribe to multiple
                    courses available online. Provides professors with facility
                    to add their own courses online.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                  <Card.Link href='https://github.com/mgvit2021/midterm-vap'>
                    GitHub
                  </Card.Link>
                  <Card.Link href='https://coursify-app.herokuapp.com'>
                    Website
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} md={4} className='d-flex'>
              <Card
                className='proj-card flex-fill mt-4'
                style={{ width: "18rem" }}
              >
                <Card.Img
                  className='img-ht'
                  variant='top'
                  src={Cloak}
                  height={149}
                />
                <Card.Body>
                  <Card.Title>Invisible Cloak</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Python|OpenCV
                  </Card.Subtitle>
                  <Card.Text>
                    A fun project to play with harry potter like invisible
                    cloak.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                  <Card.Link href='https://github.com/mgvit2021/Invisible-Cloak'>
                    GitHub
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} md={4} className='d-flex'>
              <Card
                className='proj-card flex-fill mt-4'
                style={{ width: "18rem" }}
              >
                <Card.Img
                  className='img-ht'
                  variant='top'
                  src={Developer}
                  height={149}
                />
                <Card.Body>
                  <Card.Title>DevCom</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Full-Stack|MERN
                  </Card.Subtitle>
                  <Card.Text>
                    An application to be built using MERN stack, that will help
                    in connecting developers accross the world.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                  <Card.Link href='https://github.com/mgvit2021/DevCom'>
                    GitHub
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Fade>
      </Container>
    );
  }
}

export default Projects;
