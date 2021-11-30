
import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Product = ({ img, link }) => {
    return (
        <Col sm={1} md={4}>
            <Card>
                <Card.Img variant="top" height="150px" src={img} />
                <Card.Body>
                    <a href={link}><button className="btn btn-outline">Live Site</button></a>
                    <button className="btn btn-outline">Client</button>
                    <button className="btn btn-outline">Server</button>
                </Card.Body>

            </Card>
        </Col >
    );
};

export default Product;