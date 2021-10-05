import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div className="banner ">
           <Container>
              
           <Row>
               <Col lg={9} md={6} xs={12} className="banner-details">
               <h1 className="my-5"> E Learning <i class="fas fa-graduation-cap text-warning"></i></h1>
                <h3>Be more self aware, understand your impact on others. Know how to cope with the unexpected. Learn how to succeed even under pressure. </h3>
                <button className="btn btn-secondary mt-3">See More Information</button>
                </Col>

                <Col lg={3} md={6} xs={12}>
                
                </Col>
            </Row>
           </Container>
            
        </div>
    );
};

export default Header;