import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const ShowProject = (props) => {
    const { img, id } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img[0]} />
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>Niche Project</Card.Title>

                            {/* <Card.Title>70</Card.Title> */}
                        </div>
                        {/* <div>
                            <Card.Text>
                                $70/night
                            </Card.Text>
                        </div> */}
                    </div>
                </Card.Body>
                <NavLink as={Link}
                    style={{ background: "linear-gradient(90deg, rgba(0,14,36,1) 0%, rgba(52,87,161,0.7231267507002801) 40%, rgba(0,56,255,1) 69%)", fontWeight: "600" }}
                    className="p-3 shadow-none border-0 text-uppercase btn"
                    to={`/service/${id}`}>
                    Booking
                </NavLink>
            </Card>
        </Col >
    );
};

export default ShowProject;