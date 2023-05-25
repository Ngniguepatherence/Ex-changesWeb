import { Container, Nav, Navbar } from "react-bootstrap"
import avatar from '../assets/logo.png';


const Navigation = () =>{
    return(
        <>
            <Navbar collapseOnSelect fixed="top" expand='sm' bg='dark' variant="green">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;