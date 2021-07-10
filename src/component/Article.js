import React from 'react'
import { DataKemampuan } from '../pages/Kerangka';
import { Container,Row,Col,Image } from 'react-bootstrap';
import Batu from '../assets/img/beruang.jpg';

export const Article = (props) => {
    const tool = props.data.itemDua.map(item=><li>{item}</li>)
    return (
        <React.Fragment>
            <Col>
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
                                        <h2>{props.data.heading}</h2>
                                        <p>{props.data.contentHeading}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3>{props.data.sectionSatu}</h3>
                                        <p>{props.data.itemSatu}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3>{props.data.sectionDua}</h3>
                                        <ul>
                                           {tool}
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>  
                </Container>
            </Col>
        </React.Fragment>
    )
}
