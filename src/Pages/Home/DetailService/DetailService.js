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
        <div className="app" style={{ background: 'black' }}>
            <div className="details">
                <div className="big-img">
                    <img src={newSelect?.img[0]} alt="" />
                </div>
                <div className="box">
                    <div className="row">
                        <h2 style={{ color: 'turquoise' }}>{newSelect?.title}</h2>
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

                    <a href={newSelect?.link} style={{ marginRight: '5px' }}><button className="btn-success">Live Link</button ></a>
                    <a href={newSelect?.link1} style={{ marginRight: '5px' }}><button className="btn-success">Client code</button ></a>
                    <a href={newSelect?.link2} style={{ marginRight: '5px' }}><button className="btn-success">Server code</button ></a>

                </div>
            </div>
        </div>
    );
};

export default DetailService;