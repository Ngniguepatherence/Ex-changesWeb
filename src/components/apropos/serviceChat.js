import { Link, Navigate,useNavigate } from 'react-router-dom';
import './appros.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Imcard1 from '../../asset/images/annonce.jpg';
import Imcard2 from '../../asset/images/argent11.jpg'


function ServiceChat(){
    const navigate=useNavigate();

    const Ldirection=()=>{
        navigate('../apropos');
    }
    return(
        <div>
        <Navbar bg="warning" expand="md">
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
      <div className='divs2 der'>
       <Link to='/' className='lienicon'><i className='bi bi-arrow-left-square-fill'></i></Link>  
       <h1 className='titre1'> Appros::Chat</h1>     
    </div>
    <Container className="my-5">
        <Row>
        <Col md={8}>
        <Row>
        <Col md={8}>
        <div className='monText'>
            <h1>
            mychange XXXXXXXX
            </h1>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
        </Col>
        
        <Row>
        <Col md={4}>  
          <Card>
              <Card.Img variant="top" src={Imcard1} />
              <Card.Body>
                <Card.Title>Annonce</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod lobortis odio, ac commodo sapien vestibulum vel.
                </Card.Text>
                <Button variant="primary" onClick={Ldirection}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Imcard2} />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Sed euismod arcu id eros tempus, vel tincidunt nisl sodales. Duis commodo turpis ut hendrerit scelerisque.
                </Card.Text>
                <Button variant="primary" onClick={Ldirection}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Imcard2} />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Sed euismod arcu id eros tempus, vel tincidunt nisl sodales. Duis commodo turpis ut hendrerit scelerisque.
                </Card.Text>
                <Button variant="primary" onClick={Ldirection}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        </Row>
        </Col>
        </Row>
      </Container>
      <footer className="bg-light py-3">
        <Container>
          <p className="text-center mb-0">© 2023 My Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
        
        
    )
}
export default ServiceChat;