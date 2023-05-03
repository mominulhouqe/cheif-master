import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';




const Header = () => {
    return (
        <>
            <div>
                <Navbar bg="" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className='text-white fw-bold'>Qichen</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Link to='/' className='text-white text-decoration-none mx-4'>Home</Link>


                                <Link to='/' className='text-white text-decoration-none mx-4'>Blog</Link>


                                <Link to='/' className='text-white text-decoration-none mx-4'> <PersonFill />

                                </Link>
                                <Link to='/' className='text-white text-decoration-none mx-4'>Login </Link>

                                <Link to='/' className='text-white text-decoration-none mx-4'>Register </Link>




                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Banner></Banner>

            </div>
        </>
    );
};

export default Header;