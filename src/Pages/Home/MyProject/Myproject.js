
import { Container, Row } from 'react-bootstrap';
import useProjects from '../../../Hooks/useProjects';
import ShowProject from '../ShowProject/ShowProject';

const Myproject = () => {
    const { services } = useProjects([])
    console.log(services)
    return (
        <Container>
            <Row md={3} sm={1}>
                {
                    services.map(service => <ShowProject
                        key={service._id}
                        service={service}
                    ></ShowProject>)
                }
            </Row>
        </Container>
    );
};

export default Myproject;