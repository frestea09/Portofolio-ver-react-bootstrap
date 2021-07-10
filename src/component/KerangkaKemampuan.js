import React,{useContext} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Kemampuan } from './Kemampuan'
import { DataKemampuan } from '../pages/Kerangka';
import { Article } from './Article';

const KerangkaKemampuan = () => {
    const dataKemampuan = useContext(DataKemampuan);
    let item = dataKemampuan.data.section.map(items=><Article key={items.id} data={items}/>);
    return (
        <div>
            <Container>
                <Row>
                    {item}
                </Row>
            </Container>
        </div>
    )
}
export default React.memo(KerangkaKemampuan)
