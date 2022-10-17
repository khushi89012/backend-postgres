import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import data from "../db.json";
import Logic from "../logic/logic.js";

import { useSelector, useDispatch } from "react-redux";

export default function Part() {
  const part1 = useSelector((state) => state.part1);

  console.log("op part1", part1);

  var total = [];

  let percen = 0;
  let sum;

  let cgpa = 0;

  for (let i = 0; i < part1.length; i++) {
    let sum = part1[i].total;
    total.push(sum);
  }

  sum = total.reduce((a, b) => a + b, 0);

  let count = part1.length;

  percen = ((sum / count) * 100) / 100;
  cgpa = parseFloat(percen / 9.5);

  // console.log(data);
  return (
    <div className="container m-0 p-0">
      <h3 className="text-primary fw-bold fs-5 mt-1">
        Part-I : {data[0].part_1.name}{" "}
      </h3>

      <Row className="border  border-dark  fw-bold">
        <Col lg="1" sm={1} md={1} xs={1} className="border-end border-dark ">
          <span className="fonts fw-bold">SL. No.</span>
        </Col>
        <Col
          lg={5}
          sm={5}
          md={5}
          xs={5}
          className="border-end border-start-0 border-dark p-2 fs-4 fw-bold"
        >
          SUBJECTS
        </Col>
        <Col lg={1} sm={1} md={1} xs={1} className="border-end border-dark">
          <Row className="border-bottom border-dark">
            <Col>
              <span className="fonts">FA</span>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <span className="fonts">40</span>
            </Col>
          </Row>
        </Col>
        <Col lg={1} sm={1} md={1} xs={1} className="border-dark border-end">
          <Row className="border-bottom border-dark ">
            <Col>
              <span className="fonts">Oral</span>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <span className="fonts">10</span>
            </Col>
          </Row>
        </Col>
        <Col
          lg={1}
          sm={1}
          md={1}
          xs={1}
          className="border-end border-dark border-end"
        >
          <Row className="border-bottom border-dark">
            <Col>
              <span className="fonts">SA</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="fonts">40</span>
            </Col>
          </Row>
        </Col>
        <Col lg={1} sm={1} md={1} xs={1} className="border-end border-dark">
          <Row className="border-bottom border-dark ">
            <Col>
              <span className="fonts">Oral</span>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <span className="fonts">10</span>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={2} md={2} xs={2} className=" border-dark ">
          <Row className="border-bottom border-dark">
            <Col>
              <span className="fonts">OverTotal</span>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <span className="fonts">100</span>
            </Col>
          </Row>
        </Col>
      </Row>

      {part1.map((el, i) => (
        <Row
          className="border border-start-0 border-end-0 border-bottom-0 border-dark fw-bold text-capitalize"
          key={i}
        >
          <Col lg={1} sm={1} md={1} xs={1} className=" border-dark border-end ">
            <span className="fonts">{i + 1 < 10 ? "0" + (i + 1) : i + 1}</span>
          </Col>
          <Col
            lg={5}
            sm={5}
            md={5}
            xs={5}
            className=" border-dark border-end text-start fw-bold"
          >
            <span className="fonts">{el.subject}</span>
          </Col>
          <Col lg={1} sm={1} md={1} xs={1} className="border-end border-dark">
            <span className="fonts">{el.fa}</span>
          </Col>
          <Col lg={1} sm={1} md={1} xs={1} className="border-end border-dark">
            <span className="fonts">{el.fa_oral}</span>
          </Col>
          <Col lg={1} sm={1} md={1} xs={1} className="border-end border-dark">
            <span className="fonts">{el.sa}</span>
          </Col>
          <Col lg={1} sm={1} md={1} xs={1} className="border-end border-dark">
            <span className="fonts">{el.sa_oral}</span>
          </Col>
          <Col lg={2} sm={2} md={2} xs={2}>
            <span className="fonts">
              {+el.fa + +el.fa_oral + +el.sa + +el.sa_oral}
            </span>
          </Col>
        </Row>
      ))}
      {sum ? (
        <Row className="border border-dark border-start-0 border-end-0 fw-bold">
          <Col lg={1} md={1} sm={1} xs={1} className=""></Col>
          <Col
            lg={5}
            md={5}
            sm={5}
            xs={5}
            className="border-end border-dark text-start fw-bold"
          >
            <span className="fonts fs-5">GRAND TOTAL</span>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}></Col>

          <Col lg={2} md={2} sm={2} xs={2} className=" ">
            <span className="fonts">{sum}</span>
          </Col>
        </Row>
      ) : null}
      {percen ? (
        <Row className="border-bottom border-dark  fw-bold">
          <Col lg={1} md={1} sm={1} xs={1} className=""></Col>
          <Col
            lg={5}
            md={5}
            sm={5}
            xs={5}
            className="border-end border-dark text-start "
          >
            <span className="fonts fs-5">PERCENTAGE</span>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}></Col>
          <Col lg={2} md={2} sm={2} xs={2} className="">
            <span className="fonts">
              <span className="fonts">{percen}</span>
            </span>
          </Col>
        </Row>
      ) : null}
      {sum ? (
        <Row className="border-bottom border-dark fw-bold">
          <Col lg={1} md={1} sm={1} xs={1} className=""></Col>

          <Col
            lg={5}
            md={5}
            sm={5}
            xs={5}
            className="border-dark text-start border-start-0 border-end fw-bold"
          >
            <span className="fonts fs-5">RANK</span>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}></Col>

          <Col lg={2} md={2} sm={2} xs={2} className="">
            <span className="fonts pr-2 ">V</span>
          </Col>
        </Row>
      ) : null}
    </div>
  );
}
