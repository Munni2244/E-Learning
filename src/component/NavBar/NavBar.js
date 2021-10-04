import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const style= {
        textDecoration:'none',
        marginLeft: '20px',
        padding:'10px',
        color:'white'
    }
    return (
        <div>
            <Navbar bg="secondary" variant="dark">
                <Container>
                    <Nav>
                        <Link style={style} to="/home">Home</Link>
                        <Link style={style} to="/about">About</Link>
                        <Link style={style} to="/survice">Survice</Link>
                        <Link style={style} to="/support">Support</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;