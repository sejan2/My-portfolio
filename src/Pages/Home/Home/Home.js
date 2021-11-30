import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Heading from '../Heading/Heading';
import Myproject from '../MyProject/Myproject';




const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <Myproject></Myproject>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;