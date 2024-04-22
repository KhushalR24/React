import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Pizza from '../assets/about/pizza.png';
import Salad from '../assets/about/salad.png';
import Delivery from '../assets/about/delivery-bike.png';
import Header from '../Components/Header';

const mockData = [
    {
        image: Pizza,
        title: "Original",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Salad,
        title: "Qualty Foods",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },

];

const AboutPage = () => {
    return (
        <>
        <Header/>
        <div id='#about'>
            <section className='about_section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center'>
                            <h2>The burger tastes better when you eat it with your family</h2>
                            <p>
                                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                                auctor an tempus feugiat dolor lacinia cubilia curae integer
                                orci congue and metus integer primis in integer metus
                            </p>
                            <Link to="Section3/" className="btn order_now btn-red">
                                Explore Full Menu
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='about_wrapper'>
                <Container>
                    <Row className='justify-content-md-center'>
                        {mockData.map((cardData, index) => (
                            <Col lg={4} md={6} className='mb-4 mb-md-0' key={index}>
                                <div className="about_box text-center">
                                    <div className="about_icon">
                                        <img src={cardData.image} alt="icon" className='img-fluid' />
                                    </div>
                                    <h4>{cardData.title}</h4>
                                    <p>{cardData.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            </div>
        </>
    )
}

export default AboutPage