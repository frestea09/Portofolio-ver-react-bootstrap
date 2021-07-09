import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap';
import Batu from '../assets/img/Batu.PNG';
import Kertas from '../assets/img/Kertas.PNG';
import Gunting from '../assets/img/Gunting.png';
export const Kemampuan = () => {
    return (
        <div>
             <Container fluid>
                <Row>
                    <Col>
                        <Container xs={12} md={4}  className="text-center my-2" fluid>
                            <Row>
                                <Container fluid>
                                    <Row>
                                        <Col >
                                            <Image className="imageKemampuan" src={Batu} fluid/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                            <Row>
                                <Col>
                                    <h2>Designer</h2>
                                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Things I enjoy designing:</h3>
                                    <p>UX, UI, Web, Mobile, Apps, Logos</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Design Tools:</h3>
                                    <ul>
                                        <li>Balsamiq Mockups</li>
                                        <li>Figma</li>
                                        <li>Invision</li>
                                        <li>Marvel</li>
                                        <li>Pen & Paper</li>
                                        <li>Sketch</li>
                                        <li>Webflow</li>
                                        <li>Zeplin</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
