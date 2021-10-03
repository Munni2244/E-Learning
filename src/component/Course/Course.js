import React from 'react';
import { Container } from 'react-bootstrap';

const Course = (props) => {
    const { title, description, img, prices}=props.course;
    return (
       <Container>
            <div className="d-flex my-4 shadow">
            <img width="300px" height="300px" src={img} alt="" />
            <div className="p-4 ">
            <h1>{title}</h1>
            <p className="fs-5" style={{color:'blue'}}>{description}</p>
            <p>${prices}</p>
            <button className="btn btn-secondary"> See Details</button>
            </div>

        </div>
       </Container>
    );
};

export default Course;