import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap';
import '../assets/style/styles.css';
import beruang from '../assets/img/beruang.jpg';
import Batu from '../assets/img/Batu.PNG';
import Kertas from '../assets/img/Kertas.PNG';
import Gunting from '../assets/img/Gunting.png';
export const Testing = () => {
    return (
        <div className="Testing">
          <Container fluid>
            <Row>
                <Col>
                    <Container xs={12} md={4} className="text-center my-2" fluid>
                        <Row>
                            <Col>
                                <h3>I'm proud to have collaborated with some awesome companies:</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col  xs={6} md={4} className="my-2">
                                        <Image className="imageWork" src={beruang} fluid/>
                                    </Col>
                                    <Col  xs={6} md={4} className="my-2">
                                        <Image className="imageWork" src={beruang} fluid/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
