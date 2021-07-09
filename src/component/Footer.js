import React,{Fragment,memo} from 'react';
import { Navbar,Container,Nav,NavDropdown,Row,Col,Image } from 'react-bootstrap';
import linkedin from '../assets/img/linkedin.png';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/instagram.png';
import '../assets/style/styles.css';

const Footer = ()=>{
    return(
        <Fragment>
           <Container fluid className="kerangka-footer  text-center">
               <Row>
                    <Col>
                        <Container>
                            <Row className="justify-content-center">
                                <Col>
                                    <Image src={linkedin} className="logoSocial"/>
                                </Col>
                                <Col>
                                    <Image src={twitter} className="logoSocial"/>
                                </Col>
                                <Col>
                                    <Image src={instagram} className="logoSocial"/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy;2021 ilman teguh prasetya</p>
                    </Col>
                </Row>
           </Container>
        </Fragment>
    )
}

export default memo(Footer)