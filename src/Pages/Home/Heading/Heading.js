import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Heading.css'
import img from '../../../img/1638210729156-01.jpeg'

import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Heading = () => {
    return (
        <div className="header">
            <div style={{ paddingBottom: '3%' }}>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                    sticky="top"
                    style={{ background: '#13171f' }}>

                    <Container>
                        <Navbar.Brand
                            as={Link} to="/"
                            className="ml-md-5 navs-brand "
                            style={{ color: "turquoise" }}>
                            My <strong>Portfolio</strong>
                        </Navbar.Brand>


                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="justify-content-end pr-5">
                            <Nav className="navs" navbarScroll>
                                {/* <Nav.Link as={Link} to="/" className="mr-md-5" style={{ color: "#9a8746" }} active>Home</Nav.Link> */}
                                <Nav.Link
                                    className="mr-md-5" style={{ color: "turquoise" }}
                                    href="#edu"
                                    active>
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    href='#project'
                                    to="/blogs"
                                    className="mr-md-5" style={{ color: "turquoise" }} active>
                                    Projects
                                </Nav.Link>
                                <Nav.Link
                                    href='#contact'
                                    className="mr-md-5" style={{ color: "turquoise" }} active>
                                    Contact
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/blog"
                                    className="mr-md-5" style={{ color: "turquoise" }} active>
                                    Blog
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
                <Container>

                    <Row>
                        <Col sm={12} md={6}>
                            <div className="project" style={{ marginTop: '130px', marginLeft: '20px' }} >

                                <div data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000">
                                    <h1 style={{ fontSize: "2em" }}>WEB <span style={{ color: 'turquoise' }}>DEVELOPER</span></h1>

                                    <p>Hey,I am Seejan Mahmud.I have Experience with HTML,CSS,React Js,Mongo Db,JavaScript,Node Js.Desire to position of web development  as well as to gain confidence and express my  innovative creative skills for self and company growth.</p>
                                    <div className="header-button">
                                        <a href="https://drive.google.com/file/d/1LbnZmgGzmCtgC4z9-UAV29N-8FV5J7of/view?usp=sharing" className="btn btn-outline">Download Resume</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} style={{ marginTop: "120px" }} >
                            <div>
                                <img className="imges" width="50%" style={{ alignItems: 'center', borderRadius: "40px" }} height="50%" src={img} alt="" />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div >
    );
};

export default Heading;