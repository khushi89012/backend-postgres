import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

import {useSelector, useDispatch} from "react-redux";
import {Part3} from "../Redux/action"


const initialValues = {
  no_of_working_day: "",
  no_of_day_present: "",
};

const validationSchema = yup.object().shape({
  no_of_day_present: yup
    .number()
    .required("Please Enter this field")
    .min(0, "You must be at least 0 day")
    .max(100, "You must be at most 100 days"),

  no_of_working_day: yup
    .number()
    .required("Please Enter this field")
    .min(0, "You must be at least 0 day")
    .max(100, "You must be at most 100 days"),
});

 export const Formex3 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const part = useSelector(state=>state.part3);
  console.log(part)

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const no_of_working_day_Props = formik.getFieldProps("no_of_working_day");
  const no_of_day_present_Props = formik.getFieldProps("no_of_day_present");


  // console.log(formik.values.no_of_working_day, formik.values.no_of_day_present);


    let form = {};
    form.no_of_working_day = formik.values.no_of_working_day;
    form.no_of_day_present = formik.values.no_of_day_present;

    let percentage = form.no_of_day_present / form.no_of_working_day
    percentage = percentage*100;

    

    // console.log(percentage.toFixed(2))

  const [data, setData] = useState([]);

  const [result, setResult] = useState(false);


  const handleSubmit = () => {
    setData(form);
    setResult(true);
  };

  const handleClick = ()=>{
    dispatch(Part3(form))
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleEdit = (e) => {
    setData(form)
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Part-III : Attendance
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>No of working day</Col>
            <Col>
              <Form.Control
                type="text"
                name="no_of_working_da1y"
                value={form.no_of_working_day1}
                placeholder="Enter the Marks"
                {...no_of_working_day_Props}
              ></Form.Control>
              {formik.touched.no_of_working_day &&
              formik.errors.no_of_working_day ? (
                <div className="text-danger fw-bold">
                  {formik.errors.no_of_working_day}
                </div>
              ) : null}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>No of day Present</Col>
            <Col>
              <Form.Control
                type="text"
                name="no_of_day_present1"
                value={form.no_of_day_present1}
                placeholder="Enter the Marks"
                {...no_of_day_present_Props}
              ></Form.Control>
              {formik.touched.no_of_day_present &&
              formik.errors.no_of_day_present ? (
                <div className="text-danger fw-bold">
                  {formik.errors.no_of_day_present}
                </div>
              ) : null}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>Percentage</Col>
            <Col className="text-center">
              {(percentage > 100 || percentage < 0) ? 
              (<div className="text-danger fw-bold">
              working will be greater
            </div>) : percentage.toFixed(1) + '%'}
            
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
            {(((formik.touched.no_of_day_present &&
              formik.errors.no_of_day_present) || (formik.touched.no_of_working_day &&
                formik.errors.no_of_working_day)) && (form.no_of_day_present > form.no_of_working_day)) ?
              <Button
                className="col-sm-12"
                variant="primary"
                onClick={() => {
                  handleSubmit();
                }}
                disabled
              >
                {" "}
                Add{" "}
              </Button> :
              <Button
              className="col-sm-12"
              variant="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              {" "}
              Add{" "}
            </Button>
}
            </Col>
          </Row>
          {result ? (
            <Row className="mt-3 fw-bold">
              <Col lg={12} md={12} sm={12} xs={12}>
                <Row>
                  <Col lg={8} md={8} sm={8} xs={8}>No of Working Day</Col>
                  <Col lg={4} md={4} sm={4} xs={4}>{data.no_of_working_day}</Col>
                </Row>
                <Row >
                  <Col lg={8} md={8} sm={8} xs={8}>No of Day Present</Col>
                  <Col lg={4} md={4} sm={4} xs={4}>{data.no_of_day_present}</Col>
                </Row>
              </Col>
            </Row>
          ) : null}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClick();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

