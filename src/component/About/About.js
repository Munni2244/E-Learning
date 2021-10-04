import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{marginBottom:'20%'}}>
            <Container className="bg-light shadow">
            <div className=" p-5 m-5 text-center fs-5">
                <img src="" alt="" />
                <h1>Jhanker Mahbub</h1>
                <h3>Our Team Hero! The Real Programming Hero</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore odio corporis debitis, atque reprehenderit necessitatibus rerum minus? Molestias laborum porro magni quae maxime ab voluptatem velit quam, deserunt in.</p>
            </div>
            </Container>
            <Container>
               <Row style={{marginTop:'100px'}} className="text-light">
                <Col lg={3} md={3} xs={12} className="shadow p-5">
                    <h3>Satisfied 49%</h3>
                    <h3>Apply 50% Or more++</h3>
                </Col >

                <Col lg={3} md={3} xs={12} className="shadow p-5" >
                    <h3>Get 20% off </h3>
                    <h3>When you early Join us</h3>
                </Col>

                <Col lg={3} md={3} xs={12} className="shadow p-5">
                    <h3>Our Support</h3>
                    <h3>100%</h3>
                </Col>

                <Col lg={3} md={3} xs={12} className="shadow p-5">
                    <h3>Team system</h3>
                    <h3>Public staisfied</h3>
                </Col>
                </Row>
               </Container>
        </div>
    );
};

export default About;