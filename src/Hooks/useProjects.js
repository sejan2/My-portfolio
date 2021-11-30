import { useEffect, useState } from "react";

const useProjects = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Hello.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return { services, setServices };
}
export default useProjects;