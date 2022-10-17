import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import data from "../db.json";
import { AiFillPlusSquare } from "react-icons/ai";
import "./part.css";
import { useSelector } from "react-redux";

export default function Part2() {

  const part2 = useSelector(state=>state.part2)
  console.log("data of part2",part2)

  return (
    <div className="container-fluid border-1 border-danger m-0 p-0">
      <h3 className="text-primary fs-5 fw-bold mt-1">Part-II : {data[0].part_2.name}</h3>
      <Row className="border border-dark border-start-0 border-end-0 h-100">
        <Col lg={8} md={8} sm={8} xs={8}></Col>
        <Col
          lg={4}
          md={4}
          sm={4}
          xs={4}
          className="border-start border-dark p-2 fs-4 fw-bold"
        >
          Grade
        </Col>
      </Row>
      {part2.map((el, i) => (
        <Row key={i} className="screen border border-top-0 border-dark screen border-start-0 border-end-0">
          <Col lg={8} md={8} sm={8} xs={8} className="text-start fw-bold pb-1 pt-1 fs-6">
            <span>{el.areas}</span>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="border-start border-dark fs-5 pb-1 fw-bold">
            <span>{el.grade}</span>
          </Col>
        </Row>
      ))}
    </div>
  );
}
