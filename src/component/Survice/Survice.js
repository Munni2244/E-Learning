import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Survice = (props) => {
    const {title, prices, description, img, rating}=props.survice;
    return (
        
            <Col lg={4} md={6} xs={12}>
            <Card style={{ width: '20rem', height:'500px' }} className="shadow-lg p-2">
                <Card.Img variant="top" height="200px" src={img} />
                <Card.Body>
                  <Card.Title className="fw-bold fs-4">{title}</Card.Title>
                  <Card.Text>
                  {description}
                  </Card.Text>
                  <div className="d-flex">
                  <Card.Text className="me-5 fw-bold"> ${prices}</Card.Text>
                  <h6>Rating: <Rating emptySymbol="far fa-star text-warning"
                  fullSymbol="fas fa-star text-warning"
                  readonly
                  initialRating={rating}>
                  Rating: 
                  </Rating></h6>
                  </div>

                  <button className="btn btn-secondary">Apply Now</button>
               </Card.Body>
              </Card>             
            </Col>
    
    );
};

export default Survice;