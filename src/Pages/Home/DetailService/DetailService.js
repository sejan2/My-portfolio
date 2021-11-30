import React from 'react';
import { useParams } from 'react-router';
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
                    <img src={newSelect?.img[1]} alt="" />
                </div>
                <div className="box">
                    <div className="row">
                        <h2>Nike shoe</h2>
                        <span>$344</span>
                    </div>
                    <div className="thumb">
                        <img src={newSelect?.img} alt="" />
                    </div>
                    <button className="cards">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default DetailService;