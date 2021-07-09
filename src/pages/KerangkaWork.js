import React from 'react'
import { Row,Col } from 'react-bootstrap';
import MyWork from '../component/MyWork';
import KerangkaKemampuan  from '../component/KerangkaKemampuan';

export const KerangkaWork = () => {
    return (
        <div className="KerangkaWork" id="work">
             <Row>
                <Col>
                    <KerangkaKemampuan/>
                </Col>
            </Row>
        
            <Row>
                <Col>
                    <MyWork/>
                </Col>
            </Row>
        </div>
    )
}

export default React.memo(KerangkaWork)
