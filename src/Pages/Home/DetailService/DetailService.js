import React from 'react';
import { useParams } from 'react-router';
import useProjects from '../../../Hooks/useProjects';

const DetailService = () => {
    const { services } = useProjects([]);
    const { id } = useParams();
    const newSelect = services?.find((service) => service.id === id)
    console.log(newSelect)
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default DetailService;