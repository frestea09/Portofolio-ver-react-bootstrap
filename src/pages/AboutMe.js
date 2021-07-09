import React,{memo,Fragment} from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import '../assets/style/styles.css';
const AboutMe = (props)=>{
    const {data} = props
    return(
        <Fragment>
            <Container Fluid>
                <Row className="kerangka-pembuka text-center px-5 py-5"  sm={12}>
                    <Col>
                        <h1>{data.heading}</h1>
                        <p>{data.content}</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default memo(AboutMe)