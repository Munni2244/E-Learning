import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const About = () => {
    return (
        <div>
            <Container className="bg-light shadow">
            <div className=" p-5 m-5 text-center fs-5">
                <img style={{borderRadius:'100%', width:'220px' , height:'200px'}} src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2842_0.jpg?itok=styt4qgr" alt="" />
                <h1>Jhanker Mahbub</h1>
                <h3>Our Team Hero! The Real Programming Hero</h3>
                <p> Studied in Department of Industrial and Production Engineering, BUET. Did Masters in Computer Science in North Dakota State University. Currently working as a web developer for Nielsen, Chicago.Did Masters in Computer Science in North Dakota State University. Currently working as a web developer for Nielsen, Chicago. Combine Editions .</p>
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
                <h1 className="my-5 text-center text-light"> Call Now: ++089462183</h1>
               </Container>
           
        </div>
    );
};

export default About;