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
                    <h1 className="a-title"><span style={{ color: 'red' }}>About</span> Me</h1>
                    <p className="a-sub">
                        It is a long established fact that a reader will be distracted by the
                        readable content.
                    </p>
                    <p className="a-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
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