import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Survice from '../Survice/Survice';

const Survices = () => {
    const [survices, setSurvices]=useState([]);

    useEffect(()=>{
        fetch('/SurviceData.json')
        .then(res=> res.json())
        .then(data=> setSurvices(data))
    },[])

    return (
        <div>
             <NavBar></NavBar>
           <Container>
               <h1 className="text-center text-light mt-5">More Courses You Want <i class="fas fa-hand-point-down text-warning"></i></h1>
           <Row className="g-5 my-4 mb-5 ">
            {
                survices?.map(survice=> <Survice survice={survice} key={survice.id}></Survice>)
            }
            </Row>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default Survices;