import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Card, Button } from 'react-bootstrap';
import './css1.css';
import Carousele from '../../layouts/carousel';

function Home() {
  return (
    <div className='corps'>
    <div className='arrierPlan'>
      <Navbar expand="md" >
        <Container className='nave1'>
          <Navbar.Brand href="#" className='logo' text='light'>MyChange</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="/">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/apropos">About</Nav.Link>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item href="/serviceConv">conversion</NavDropdown.Item>
                <NavDropdown.Item href="/servicePub">publication</NavDropdown.Item>
                <NavDropdown.Item href="/serviceChat">chat</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousele/>
      </div>
      <div className='montextA'>
        <h1>
        mychange XXXXXXXX
        </h1>
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  
      </div>
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/237/400/300" />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod lobortis odio, ac commodo sapien vestibulum vel.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/238/400/300" />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Sed euismod arcu id eros tempus, vel tincidunt nisl sodales. Duis commodo turpis ut hendrerit scelerisque.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/id/238/400/300" />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Sed euismod arcu id eros tempus, vel tincidunt nisl sodales. Duis commodo turpis ut hendrerit scelerisque.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="bg-light py-3">
        <div style={{backgroundColor:'rgb(2, 2, 27)',width:'100%', height:'36vh', color:'white',fontSize:'25px',padding:'35px'}}>
          <p className="text-center mb-0 " >© 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
