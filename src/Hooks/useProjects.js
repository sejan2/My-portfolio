import { useEffect, useState } from "react";

const useProjects = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sejan2/My-portfolio/main/public/Hello.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return { services, setServices };
}
export default useProjects;