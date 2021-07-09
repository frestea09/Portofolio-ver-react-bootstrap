import React,{memo,Fragment} from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import '../assets/style/styles.css';
import Batu from '../assets/img/Batu.PNG';
import Kertas from '../assets/img/Kertas.PNG';
import Gunting from '../assets/img/Gunting.png';
const Work = ()=>{
    return(
        <Fragment>
            <Container Fluid className="d-flex justify-content-between">
            <Row className="kerangka-pembuka text-center px-5 py-5" sm={12}>
                  <Col sm={12}>
                    <Image className="imageKemampuan" src={Batu} fluid/>
                    <h2>Designer</h2>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <h3>Things I enjoy designing:</h3>
                    <p>UX, UI, Web, Mobile, Apps, Logos</p>
                    <h3>Design Tools:</h3>
                    <ul>
                        <li>Balsamiq Mockups</li>
                        <li>Figma</li>
                        <li>Invision</li>
                        <li>Marvel</li>
                        <li>Pen & Paper</li>
                        <li>Sketch</li>
                        <li>Webflow</li>
                        <li>Zeplin</li>
                    </ul>
                  </Col>
                  <Col sm={12}>
                    <Image className="imageKemampuan" src={Gunting} fluid/>
                    <h2>Front-end Developer</h2>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <h3>Languages I speak:</h3>
                    <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                    <h3>Dev Tools:</h3>
                    <ul>
                        <li>Atom</li>
                        <li>Bitbucket</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Codekit</li>
                        <li>Codepen</li>
                        <li>Github</li>
                        <li>Gitlab</li>
                        <li>Terminal</li>
                    </ul>
                  </Col>
                  <Col sm={12}>
                    <Image className="imageKemampuan" src={Kertas} fluid/>
                    <h2>Mentor</h2>
                    <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                    <h3>Experiences I draw from:</h3>
                    <p>UX/UI, Product design, Freelancing</p>
                    <h3>Mentor Stats:</h3>
                    <ul>
                        <li>5 years experience</li>
                    </ul>
                  </Col>
              </Row>
            </Container>
        </Fragment>
    )
}

export default memo(Work)