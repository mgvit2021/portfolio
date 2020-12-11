import React, { Component } from 'react';
import {Container, Image} from 'react-bootstrap';
import Banner from '../images/banner.svg';

export class Intro extends Component {
  render() {
    return (
      // <Container className='intro' id='intro' fluid={true}>
      //   <ParticlesBg num={60} color='#8753cc' type='cobweb' bg={true} />
      //   <Jumbotron fluid={true} className='text-center jumbo-intro'>
      //     <p className='lead'>Mridul Gupta</p>
      //     <ReactRotatingText
      //       className='type-effect lead'
      //       items={[
      //         'Software Developer',
      //         'Full Stack Developer',
      //         'ML Enthusiast',
      //       ]}
      //     />
      //     <div className='doodle'>
      //       <img alt='Doodle' src={Doodle} height='500'></img>
      //     </div>
      //   </Jumbotron>
      // </Container>
      // <Container className='intro' id='intro' fluid={true}>
      //   <Row>
      //     <Image
      //       id='avatar'
      //       className='mx-auto d-block'
      //       src={Avatar}
      //       roundedCircle
      //     />
      //     <p id='greeting'>Hi, I am Mridul!</p>
      //   </Row>
      // </Container>
      <Container id='intro' className='intro' fluid={true}>
          <Image id='banner' src={Banner} fluid />
      </Container>
    );
  }
}

export default Intro;
