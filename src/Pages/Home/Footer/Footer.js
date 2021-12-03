import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <div style={{ color: 'white', background: '#13171f', padding: '20px' }}>
            <Row>
                <h2 style={{ color: 'turquoise' }}>SEEJAN MAHMUD</h2>
                <Col md={12} className="nav-icons">

                    <ul>
                        <li>
                            <a href="https://web.facebook.com/sejan.ahmed.948"><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/see_juuh/"><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com"><FaTwitter /></a>
                        </li>
                        <li>
                            <a href="https://www.github.com/sejan2"><FaLinkedin /></a>
                        </li>
                    </ul>
                </Col>
                <p>Copyright © All right reserved by Seejan Mahmud</p>
            </Row>

        </div>
    );
};

export default Footer;