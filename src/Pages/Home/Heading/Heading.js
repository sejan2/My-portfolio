import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Heading.css'
import resume from '../../../img/SEEJAN MAHMUD02.pdf'
import img from '../../../img/1638210729156-01.jpeg'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
// import { Link } from 'react-router-dom';

const Heading = () => {
    return (
        <div className="header">
            <nav>
                <a href="#/" className="logo">PORTFO<span style={{ color: 'red' }}>LIO</span></a>
                <div className="nav-links">
                    <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/">Services</a></li>
                        <li><a href="#/">Portfolio</a></li>
                        <li><a href="#/">About </a></li>
                        <li><a href="#/">Connect</a></li>
                    </ul>
                </div>
            </nav>
            <div style={{ paddingTop: '2%' }}>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div style={{ textAlign: 'left', marginTop: '130px', marginLeft: '20px' }}>
                                <div className="nav-icons">
                                    <ul>
                                        <li>
                                            <a href="/#"><FaFacebookF /></a>
                                        </li>
                                        <li>
                                            <FaInstagram />
                                        </li>
                                        <li>
                                            <FaTwitter />
                                        </li>
                                        <li>
                                            <FaLinkedin />
                                        </li>
                                    </ul>
                                </div>
                                <h1 style={{ fontSize: "2em" }}>WEB <span style={{ color: 'red' }}>DEVELOPER</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore voluptates optio cum eum molestiae at harum doloribus sed iure.</p>
                                <div className="header-button">
                                    <a href={resume} download={resume} className="btn btn-outline">My Portfolio</a>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} style={{ marginTop: "120px" }} >
                            <div>
                                <img width="30%" style={{ alignItems: 'center', borderRadius: "40px" }} height="30%" src={img} alt="" />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Heading;