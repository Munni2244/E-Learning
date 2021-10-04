import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Course = (props) => {
    const { title, description, img, prices}=props.course;
    return (

    
        <div>
             <Container>
            <Row className="shadow my-5 text-light">
            <Col lg={5} md={6} xs={12} className="">
            <img width="420px" height="300px" src={img} alt="" />
            </Col>
            <Col lg={7} md={6} xs={12}>
            <h1>{title}</h1>
            <p className="fs-5">{description}</p>
            <p>${prices}</p>
            <button className="btn btn-secondary"> See Details</button>
            </Col>
            </Row>
             </Container>
        </div>
      
    );
};

export default Course;