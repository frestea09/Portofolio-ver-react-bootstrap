import React,{memo,Fragment} from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import GambarIlman from '../assets/img/perfect_foto.png';
import '../assets/style/styles.css';
const SalamPembuka = ()=>{
    return(
        <Fragment>
            <Container Fluid>
                <Row>
                    <Col className="kerangka-pembuka text-center py-5" xs={12}>
                        <h1>Designer, Front-end Developer & Mentor</h1>
                        <p>I design and code beautifully simple things, and I love what I do.</p>
                        <Image className="img-ilman" src={GambarIlman} roundedCircle  fluid/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default memo(SalamPembuka)