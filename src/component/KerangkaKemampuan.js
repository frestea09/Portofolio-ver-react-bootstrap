import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Kemampuan } from './Kemampuan'

const KerangkaKemampuan = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Kemampuan/>
                    </Col>
                    <Col>
                        <Kemampuan/>
                    </Col>
                    <Col>
                        <Kemampuan/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default React.memo(KerangkaKemampuan)
