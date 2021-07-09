import React,{Fragment,memo} from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

const NavigationBar = ()=>{
    return(
        <Fragment>
           <Navbar collapseOnSelect expand="lg" >
                <Container fluid>
                    <Navbar.Brand href="#home">ILMAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#pricing">Contact Me</Nav.Link>
                            <Nav.Link href="#about-me">About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default memo(NavigationBar)