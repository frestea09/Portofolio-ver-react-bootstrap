import React,{memo,Fragment} from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import '../assets/style/styles.css';
const Introduction = (props)=>{
    const {data} = props
    return(
        <Fragment>
            <Container Fluid>
                <Row>
                    <Col className="kerangka-pembuka text-center py-5" xs={12}>
                        <h1>{data.heading}</h1>
                        <p>{data.content}</p>
                        <Image className="img-ilman" src={data.image} roundedCircle  fluid/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default memo(Introduction)