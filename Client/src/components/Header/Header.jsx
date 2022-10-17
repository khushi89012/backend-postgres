import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function Header(){
    return (
        <Container className="m-0 p-0 ">
            <Row><p class="text-center fs-3 text-danger fw-bold p-0 m-0 border-dark"> First  Terminal Examination  2018-19 </p></Row>
            <Row><p class="text-center fs-5 fw-bold pb-1 pt-1 m-0 border-top border-bottom border-dark">ACADMICS PERFORMANCE </p></Row>

        </Container>
    )
}

