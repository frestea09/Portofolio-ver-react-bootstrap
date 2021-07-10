import React,{memo,Fragment,useContext} from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import beruang from '../assets/img/beruang.jpg';
import '../assets/style/styles.css';
import { DataWork } from '../pages/Kerangka';

const MyWork = ()=>{
    const dataWork = useContext(DataWork);
    return(
        <Fragment>
             <Container className="mx-2" fluid>
                <Row>
                    <Col xs={12} className="text-center">
                        <h3>{dataWork.data.heading}</h3>
                        <p>{dataWork.data.content}</p>
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