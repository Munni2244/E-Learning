import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses]=useState([]);

    useEffect(()=>{
        fetch('/HomeData.json')
        .then(res=> res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <Container>
               
                <h1 className="my-5 text-light">Our Courses <i class="fas fa-book-reader text-warning"></i></h1>
               
             {
                 courses?.map( course=> <Course course={course}></Course>)
             }
             
            </Container>
        </div>
    );
};

export default Courses;