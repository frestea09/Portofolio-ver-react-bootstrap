import React,{memo,Fragment,useState} from 'react';
import NavigationBar from '../component/NavigationBar';
import AboutMe from '../pages/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../component/Footer';
import PreviousCompany from '../component/PreviousCompany';
import { Container,Row,Col } from 'react-bootstrap';
import Introduction from '../pages/Introduction';
import { KerangkaWork } from './KerangkaWork';
import GambarIlman from '../assets/img/perfect_foto.png';
import Gunting from '../assets/img/beruang.jpg';
import { Article } from '../component/Article';
import Batu from '../assets/img/beruang.jpg';

export const DataKemampuan = React.createContext();
export const DataWork = React.createContext();
export const Kerangka = ()=>{
    const [dataIntroduction,setDataIntroduction] = useState(
        {
            heading : 'Designer, Front-end Developer & Mentor',
            content : 'I design and code beautifully simple things, and I love what I do.',
            image : GambarIlman
        }
    )
    const [dataAbout,setDataAbout] = useState(
        {
            heading : 'Hi, I’m Matt. Nice to meet you.',
            content : 'Since beginning my journey as a freelance designer nearly 10 years ago, I\'ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I\'m quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.'
        }
    )
    const [previousCompany,setPreviousCompany] = useState(
        {
            data : 
                {
                    heading : 'My Recent Work',
                    content : 'Here are a few design projects I\'ve worked on recently. Want to see more? Email me.'
                }
            
        }
    );
    const dataKemampuan =  {
        data :{
            section : [
                {
                    id : 1,
                    gambar : {Batu},
                    heading : 'Designer',
                    contentHeading : 'I value simple content structure, clean design patterns, and thoughtful interactions',
                    sectionSatu : 'Things I enjoy designing:',
                    itemSatu : 'UX, UI, Web, Mobile, Apps, Logos',
                    sectionDua : 'Design Tools:',
                    itemDua : [
                        'Balsamiq Mockups',
                        'Figma',
                        'Invision',
                        'Marvel',
                        'Pen & Paper',
                        'Sketch',
                        'Webflow',
                        'Zeplin',
                    ]
                },
                {
                    id : 2,
                    gambar : {Gunting},
                    heading : 'Front-end Developer',
                    contentHeading : 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
                    sectionSatu : 'Languages I speak:',
                    itemSatu : 'HTML, Pug, Slim, CSS, Sass, Less',
                    sectionDua : 'Dev Tools:',
                    itemDua : [
                        'Atom',
                        'Bitbucket',
                        'Bootstrap',
                        'Bulma',
                        'Codekit',
                        'Codepen',
                        'Github',
                        'Gitlab',
                        'Terminal',
                    ]
                },
                {
                    id : 3,
                    gambar : {Gunting},
                    heading : 'Mentor',
                    contentHeading : 'I genuinely care about people, and love helping fellow designers work on their craft.',
                    sectionSatu : 'Experiences I draw from:',
                    itemSatu : 'UX/UI, Product,design Freelancing',
                    sectionDua : 'Mentor Stats:',
                    itemDua : [
                        '5 years experience'
                    ]
                }
            ]
        }
    };

    return(
        <Fragment>
                <NavigationBar/>
                <Container fluid>
                    <Row>
                        <Col>
                            <Introduction data={dataIntroduction}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="about-me">
                            <AboutMe data ={dataAbout}/>
                        </Col>
                    </Row>
                    <DataKemampuan.Provider value={dataKemampuan}>
                        <DataWork.Provider value = {previousCompany}>
                            <KerangkaWork/>
                        </DataWork.Provider>
                    </DataKemampuan.Provider >
                    <Row>
                        <Col>
                            <PreviousCompany/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Footer/>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
    )
}

