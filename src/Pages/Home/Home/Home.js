import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Heading from '../Heading/Heading';
import Myproject from '../MyProject/Myproject';

import ProductList from '../ProductList/ProductList';



const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <About></About>
            <ProductList></ProductList>
            <Contact></Contact>
            <Myproject></Myproject>
        </div>
    );
};

export default Home;