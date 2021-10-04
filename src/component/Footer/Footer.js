import React from 'react';
import { Row,Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-light mb-0">
            <footer> 
               <Container>
               <Row className="p-5">
                <Col lg={6} md={6} xs={12}>
                    <p><small> We are suppoted daily 12 hours. If You want to prove Your self join us</small></p>
                    <h6>Got Queastion? Call Us</h6>
                    <h6>++018342445</h6>
                    <h2><i class="fab fa-cc-apple-pay text-info"></i> <i class="fas fa-tablet-alt text-info"></i></h2>
                    
                </Col >
                <Col lg={3} md={6} xs={12}>
                    <h5>Information</h5>
                    <h6><small>Address</small></h6>
                    <h6><small>Apply</small></h6>
                    <h6><small>Payment</small></h6>
                </Col >
                <Col lg={3} md={6} xs={12}>
                    <h5>Company</h5>
                    <h6><small>Address</small></h6>
                    <h6><small>Number</small></h6>
                    <h6><small>Identy</small></h6>
                </Col >
               
              
                </Row>
               </Container>
                <p className="text-center"><small>Copyright © 2021 Education web. All Rights Reserved.</small></p>
            </footer>
        </div>
    );
};

export default Footer;