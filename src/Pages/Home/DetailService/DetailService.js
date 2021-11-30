import React from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import useProjects from '../../../Hooks/useProjects';
import './Detail.css'

const DetailService = () => {

    const { services } = useProjects();
    const { id } = useParams();
    const newSelect = services?.find((service) => service.id === id)
    console.log(newSelect)


    return (
        <div className="app">
            <div className="details">
                <div className="big-img">
                    <img src={newSelect?.img[0]} alt="" />
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{newSelect?.title}</h2>
                        <span>{newSelect?.description}</span>
                    </div>
                    <div className="thumb">
                        {newSelect?.img?.map((pics) => (
                            <img src={pics} alt="" />
                        )

                        )}
                        {/* <img src={newSelect?.img[0]} alt="" />
                        <img src={newSelect?.img[1]} alt="" />
                        <img src={newSelect?.img[2]} alt="" /> */}
                    </div>

                    <Link to={''}><button className="cards">Live Link</button ></Link>
                    <p>{newSelect?.link}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailService;