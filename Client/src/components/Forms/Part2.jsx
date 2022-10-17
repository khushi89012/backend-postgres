import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Part2 } from "../Redux/action";
import { AiFillPlusSquare } from "react-icons/ai";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  areas : "",
  grade : ""
};
const validationSchema = yup.object().shape({
  areas: yup
    .string()
    .required("A subject is required"),

  grade: yup
    .string()
    .required("A subject is required"),
})

export const Formex2 = () => {

  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema
  })

  const areas_Props = formik.getFieldProps("areas");
  const grade_Props = formik.getFieldProps("grade")

  const grades = ["Select","A1", "A2", "B1", "B2", "C1", "C2", "D"];
  const areas = [
  "Select",
  "Development & Maturity",
  "Responsibility","Self-Confidence",
  "Participation in Group Work",
  "Neatness",
  "Music",
  "Discipline",
  "Hand Work",
  "Attitude towards Home work",
  "Craft",
  "Regularity & Punctuality"]

  const [grade, setGrade] = useState([...grades])
  const [area, setArea] = useState([...areas])
  const [data, setData] = useState([])

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  var form = {}
    form.areas = formik.values.areas;
    form.grade = formik.values.grade;


  const handleSubmit = () => {
    setData([...data, form]);
    let list = [...area]
    list.splice(list.indexOf(form.areas),1)
    setArea(list)
  };

  const handleClick = () => {
    toast.success("Data Added!");
    dispatch(Part2(data))
  }

  const handleEdit = (form,i) => {
    const area1 = [...data];
    area1.splice(i, 1);
    setData(area1)
    const list = [form.areas,...area]
    setArea(list)

  }

  const handleDelete = (form,i) => {
    toast.error("Data Delete!");

    const list = [...data];
    list.splice(i, 1);
    setData(list)
    let areaSub = [form.areas,...area];
    setArea(areaSub)
  }



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Part-II : Co-Scholastic Areas
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Part-II : Co-Scholastic Areas</Modal.Title>
        </Modal.Header>

        <Modal.Body className="lh-2">
          <Row>
            <Col>
              <Form.Label>Co-Scholastic Areas</Form.Label>

              <Form.Select name="areas"
              {...areas_Props}
              >
                {area.map(el=>(
                  <option value={el}>{el}</option>
                ))}
              </Form.Select>
              {formik.touched.areas &&
                formik.errors.areas ? (
                <div className="text-danger fw-bold">
                  {formik.errors.areas}
                </div>
              ) : null}
            </Col>
            <Col>
              <Form.Label>GRADE</Form.Label>
              <Form.Select name="grade"
              {...grade_Props}
              >
                {grade.map((el)=>(
                  <option value={el}>{el}</option>
                ))}
              </Form.Select>
              {formik.touched.grade &&
                formik.errors.grade ? (
                <div className="text-danger fw-bold">
                  {formik.errors.grade}
                </div>
              ) : null}
            </Col>
            <Col>
              <Row>Add</Row>
              <Col>
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="mt-2"
                >
                  <AiFillPlusSquare />
                </Button>
              </Col>
            </Col>
          </Row>
          {data.map((el,i)=>(
            <Row key={i} className="mt-3 border border-dark">
              <Col>{el.areas}</Col>
              <Col>{el.grade}</Col>
              <Col>
              <Button 
              className = "btn btn subject"
              onClick={()=>{handleEdit(el,i)}}
              >Edit</Button>
              <Button 
              className = "btn btn-danger"
              onClick={() => {handleDelete(el,i)}}
              >
                Del
              </Button>
          <ToastContainer />

              </Col>
            </Row>
          ))}
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
          <ToastContainer />
        </Modal.Footer>
      </Modal>
    </>
  );
};
