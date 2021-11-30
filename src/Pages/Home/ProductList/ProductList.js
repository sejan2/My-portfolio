import React from 'react';
import './ProductList.css'
import Product from '../Product/Product';
import { products } from '../../../data';
import { Container, Row } from 'react-bootstrap';



const ProductList = () => {
    return (
        <div className="pl" style={{ background: 'black' }}>
            <div className="pl-texts">
                <h1 className="pl-title" style={{ color: 'gray' }}>Here is my favourite project</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <Container>
                <Row>
                    {products.map((item) => (
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductList;
// {products.map((item) => (
//     <Product key={item.id} img={item.img} link={item.link} />
// ))}