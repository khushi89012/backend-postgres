import { Row, Col } from "react-bootstrap";
import data from "../../db1.json";
import './part.css'
import data1 from "../db.json";

export default function Part4() {
  let total = [];
  let percen = 0;
  let cgpa = 0;
  data1[0].part_1.subject.map(el => {
    total.push(el.total)
  })

  let sum = 0;
  let count = 0;
  for (let i = 0; i < total.length; i++) {
    if (!isNaN(total[i])) {
      count++;
      sum += total[i]
    }
  }
  percen = ((sum / count * 100) / 100)
  cgpa = parseFloat(percen / 9.5)


  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6} className="text-start mt-1">
          <h5 style={{fontWeight:"bold"}}>C.G.P. : {(cgpa >= 10 ? Math.floor(cgpa) : cgpa.toFixed(1))}</h5>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6} className="text-end mt-1">
          <h5 style={{fontWeight:"bold"}}>Grade : 9.1</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6} className="text-start">
          <p className="fs-5">Teacher's Remark : <span style={{ "fontWeight": "bold", fontSize: "18px" }}>Excellent</span></p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={4} md={4} sm={4} xs={4} className="text-start">
          <h4 style={{ "fontFamily": "Brush Script MT" }}>Teacher's Signature</h4>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} className="text-center">
          <h4 style={{ "fontFamily": "Brush Script MT" }}>Parents's Signature</h4>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} className="text-end">
          <h4 style={{ "fontFamily": "Brush Script MT" }}>
            Principal's Signature
          </h4>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col></Col>
        <Col lg={6} md={6} sm={8} xs={12}>
          <p >
            <span style={{ "fontSize": "36px", "fontWeight": "700" }}>G</span>
            <span style={{ "fontSize": "26px", "fontWeight": "500" }}>RADING</span>
            <span>{" "}</span>&nbsp;


            <span style={{ "fontSize": "36px", "fontWeight": "700" }}>S</span>
            <span style={{ "fontSize": "26px", "fontWeight": "500" }}>CALE</span>
          </p>

          <Row className="border border-bottom-0 border-dark fw-bold ">
            <Col lg={4} md={4} sm={4} xs={4} className>
              <span className="fonts"> MARKS RANGE</span>

            </Col>
            <Col
              lg={4}
              md={4}
              sm={4}
              xs={4}
              className="border-start border-end border-dark"
            >
              <span className="fonts">GRADES</span>

            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
              <span className="fonts"> REMARKS </span>

            </Col>
          </Row>

          {data[0].rank.map((el) => (
            <Row className="border border-bottom-0 border-dark ">
              <Col
                lg={4}
                md={4}
                sm={4}
                xs={4}
                className="border-bottom-0 border-dark "
              >
                <span className="fonts"> {el.marks}</span>

              </Col>
              <Col
                lg={4}
                md={4}
                sm={4}
                xs={4}
                className="border-start border-end border-bottom-0 border-dark "
              >
                <span className="fonts">{el.grades}</span>

              </Col>
              <Col
                lg={4}
                md={4}
                sm={4}
                xs={4}
                className="border-bottom-0 border-dark text-start"
              >
                <span className="fonts ">{el.remark}</span>


              </Col>
            </Row>
          ))}
        </Col>
        <Col></Col>
      </Row>
      <Row className="border-top border-dark p-1">
        <Col style={{ "fontFamily": "Lucida Calligraphy" }}>
          <h5 className="bottom-font"> Our Parents are seen God on the Earth. </h5>
        </Col>
      </Row>
    </div>
  );
}
