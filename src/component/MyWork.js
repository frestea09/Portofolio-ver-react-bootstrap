import React,{memo,Fragment} from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import beruang from '../assets/img/beruang.jpg';
import '../assets/style/styles.css';

const MyWork = ()=>{
    return(
        <Fragment>
             <Container className="mx-2" fluid>
                <Row>
                    <Col xs={12} className="text-center">
                        <h3>My Recent Work</h3>
                        <p>Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
                    </Col>  
                </Row>
                <Row>
                    <Col  xs={12} md={4} className="my-2">
                        <Image className="imageWork" src={beruang} fluid/>
                    </Col>
                    <Col  xs={12} md={4} className="my-2">
                        <Image className="imageWork" src={beruang} fluid/>
                    </Col>
                    <Col  xs={12} md={4} className="my-2">
                        <Image className="imageWork" src={beruang} fluid/>
                    </Col>
                    <Col  xs={12} md={4} className="my-2">
                        <Image className="imageWork" src={beruang} fluid/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default memo(MyWork)