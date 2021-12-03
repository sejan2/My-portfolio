import React from 'react';
import './About.css'
import edu from '../../../img/edu.jpg'

const About = () => {
    return (
        <div className="a" id="edu">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <div style={{ textAlign: 'left' }}>
                    <h1 className="a-title"><span style={{ color: 'turquoise' }}>About</span> Me</h1>
                    <h5 className="a-sub">
                        Hey,I am Seejan.I am from Dhaka,Bangladesh. I always love to explore new things.
                    </h5>
                    <p className="a-desc">
                        I am interested in Web Development. I love to code and always try to make new websites with creative ideas.
                        I'm passionate to do coding because I love this field. I make fully mobile responsive and real-world websites. I make front-end and back-end websites also.
                    </p>
                </div>
                <div className="a-award">
                    <img src={edu} alt="" className="a-award-img" />
                    <div className="a-award-texts" style={{ textAlign: 'left' }}>
                        <h2>Education</h2>
                        <h4 className="a-award-title">Shaheed Police Smrity College</h4>
                        <p className="a-award-desc">
                            Passed:Hsc(2020)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;