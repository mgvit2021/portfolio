import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
export class NavbarHead extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: 'top',
      activeClass: 'nav-class',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = 'nav-class';
      if (window.scrollY >= 30) {
        activeClass = 'scroll shadow';
      }
      this.setState({ activeClass });
    });
  }
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand='lg'
        fixed='top'
        className={`${this.state.activeClass}`}
        bg='light'
        variant='light'
      >
        <Navbar.Brand href='#intro' className='lead nav-head'>
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          className='nav-toggler'
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link href='#about' className='n-link pr-3'>
              About
            </Nav.Link>
            <Nav.Link href='#projects' className='n-link pr-3'>
              Projects
            </Nav.Link>
            <Nav.Link href='#timeline' className='n-link pr-3'>
              Experience
            </Nav.Link>
            <Nav.Link href='#contact' className='n-link pr-3'>
              Contact
            </Nav.Link>
            <Nav.Link
              target='blank'
              href='https://drive.google.com/file/d/1U3HIkwFhvoVh4CntMKFBipSOA8KmJLRN/view?usp=sharing'
              className='n-link pr-3'
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarHead;
