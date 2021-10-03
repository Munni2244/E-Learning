import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
           <Container>
           <Row className="g-5 mt-4 ">
            {
                survices?.map(survice=> <Survice survice={survice}></Survice>)
            }
            </Row>
           </Container>
        </div>
    );
};

export default Survices;