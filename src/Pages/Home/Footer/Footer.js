import React from 'react';
import { Col, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <div style={{ color: 'white', background: '#13171f', padding: '20px' }}>
            <Row>
                <Col sm={4}>
                    <h4 style={{ color: 'turquoise' }}>Product</h4>
                    <ul className="list-unstyled" style={{ textDecoration: 'none' }}>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Best Service</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Live Site</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Phone no.</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Email Address</li></a>
                    </ul>
                </Col>
                <Col sm={12} md={4}>
                    <h4 style={{ color: 'turquoise' }}>All list</h4>
                    <ul className="list-unstyled" style={{ textDecoration: 'none' }}>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Best Products</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>My Portfolio</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Best Decisiom</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Contact Info</li></a>
                    </ul>
                </Col>
                <Col sm={4}>
                    <h4 style={{ color: 'turquoise' }}>list</h4>
                    <ul className="list-unstyled" style={{ textDecoration: 'none' }}>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Benefits</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>My Portfolio</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Good Decisiom</li></a>
                        <a style={{ textDecoration: 'none' }} href="#/"><li>Contact Info</li></a>
                    </ul>
                </Col>
            </Row>

        </div>
    );
};

export default Footer;