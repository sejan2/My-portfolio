
import { Container, Row } from 'react-bootstrap';
import useProjects from '../../../Hooks/useProjects';
import ShowProject from '../ShowProject/ShowProject';

const Myproject = () => {
    const { services } = useProjects([])
    console.log(services)
    return (
        <div style={{ background: 'black', padding: '40px' }}>
            <h1 style={{ color: "turquoise" }}>My Latest Project</h1>
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
        </div>
    );
};

export default Myproject;