import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Survice = (props) => {
    const {title, prices, description, img}=props.survice;
    return (
        
            <Col lg={4} md={6} xs={12}>
            <Card style={{ width: '20rem' }} className="shadow-lg p-2">
  <Card.Img variant="top" height="200px" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Card.Text> ${prices}</Card.Text>
  </Card.Body>
</Card>
            </Col>
    
    );
};

export default Survice;