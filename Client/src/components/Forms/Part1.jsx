import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {  Row, Col } from "react-bootstrap";
import { AiFillPlusSquare } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Part1 } from "../Redux/action";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  subject : "",
  fa : "",
  fa_oral : "",
  sa : "",
  sa_oral : "",
};

//creating the validation schema
const validationSchema = yup.object().shape({
  subject: yup
    .string()
    .required("A subject is required"),

  fa: yup
    .number()
    .required("Please supply")
    .min(1, "You must be at least 1")
    .max(40, "You must be at most 40 "),

  fa_oral: yup
  .number()
  .required("Please supply")
  .min(1, "You must be at least 1")
  .max(10, "You must be at most 10"),

  sa : yup
    .number()
    .required("Please supply ")
    .min(1, "You must be at least 1 ")
    .max(40, "You must be at most 40 "),

  sa_oral: yup
    .number()
    .required("Please supply ")
    .min(1, "You must be at least 1")
    .max(10, "You must be at most 10"),
  
})


export const Formex1 = () => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema
  })

  const subject_Props = formik.getFieldProps("subject");
  const fa_Props = formik.getFieldProps("fa")
  const fa_oral_Props = formik.getFieldProps("fa_oral")
  const sa_Props = formik.getFieldProps("sa")
  const sa_oral_Props = formik.getFieldProps("sa_oral")

  var part1 = useSelector((state) => state.part1);
 

  let subjectName = ["Select","English", "Hindi", "Sanskrit/ Urdu", "Maths", "EVS", "Social Study", "Computer", "Moral", "GK", "Conversation", "Drawing"];
  const [sub, setSub] = useState([...subjectName]);
  let form = {}

  React.useEffect(()=>{

    form.subject = formik.values.subject;
    form.fa = formik.values.fa;
    form.fa_oral = formik.values.fa_oral;
    form.sa = formik.values.sa;
    form.sa_oral = formik.values.sa_oral;
    form.total = +form.fa + +form.fa_oral + +form.sa + +form.sa_oral


  },[formik,form])



  const dispatch = useDispatch();
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [data, setData] = useState([]);

  

  const handleSubmit = () => {
    const list = [...sub];
    list.splice(list.indexOf(form.subject),1)
    setSub(list)
    setData([...data, form]);
  };

  React.useEffect(() => {
    setSub(sub)
    setData(data);
  }, [data,sub]);


  const handleEdit = (form,i) => {
    const list = [...data];
    list.splice(i, 1);
    setData(list)
    console.log("form", form)
    const subList = [form.subject,...sub];
    setSub(subList)

  }

  const handleDelete = (form,i) => {
    const list = [...data];
    list.splice(i, 1);
    setData(list)
    let subList = [form.subject,...sub];
    setSub(subList)
  }

  const handleClick = () => {
    dispatch(Part1(data));
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Part-I : Scholastic Areas
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Part-I : Scholastic Areas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="border-top  border-dark  fw-bold">
            <Col
              lg={3}
              sm={2}
              md={2}
              xs={2}
              className="border-end border-start-0 border-dark p-2 fs-5 fw-bold"
            >
              <Form.Label>SUBJECTS</Form.Label>
            </Col>
            <Col lg={2} sm={2} md={2} xs={2} className="border-end border-dark">
              <Row className="border-bottom border-dark">
                <Col>
                  <span className="fonts">
                    <Form.Label>FA</Form.Label>
                  </span>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <span className="fonts">40</span>
                </Col>
              </Row>
            </Col>
            <Col lg={2} sm={2} md={2} xs={2} className="border-dark border-end">
              <Row className="border-bottom border-dark ">
                <Col>
                  <span className="fonts">
                    <Form.Label>ORAL</Form.Label>
                  </span>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <span className="fonts">10</span>
                </Col>
              </Row>
            </Col>
            <Col
              lg={2}
              sm={2}
              md={2}
              xs={2}
              className="border-end border-dark border-end"
            >
              <Row className="border-bottom border-dark">
                <Col>
                  <span className="fonts">
                    <Form.Label>SA</Form.Label>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="fonts">40</span>
                </Col>
              </Row>
            </Col>
            <Col lg={2} sm={2} md={2} xs={2} className="border-end border-dark">
              <Row className="border-bottom border-dark ">
                <Col>
                  <span className="fonts">
                    <Form.Label>ORAL</Form.Label>
                  </span>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <span className="fonts">10</span>
                </Col>
              </Row>
            </Col>
            <Col lg={1} sm={1} md={1} xs={1} className=" border-dark">
              Add To List
            </Col>
          </Row>
          {/* --------------------------------------------------------------------------------------------- */}
          <Row className="border-top  border-dark  fw-bold">
            <Col
              lg={3}
              sm={2}
              md={2}
              xs={2}
              className="border-end border-start-0 border-dark p-2 fs-4 fw-bold"
            >
              <Form>
                <Form.Select name="subject"
                {...subject_Props}
                >
                  {sub.map(el=>(
                    <option value={el}>{el}</option>
                  ))}
                </Form.Select>
                {formik.touched.subject &&
                formik.errors.subject ? (
                <div className="text-danger fw-bold">
                  {formik.errors.subject}
                </div>
              ) : null}
              </Form>
              
            </Col>
            <Col lg={2} sm={2} md={2} xs={2} className="border-end border-dark">
              <Form.Control
                type="number"
                placeholder="Enter the Marks"
                value={form.fa}
                name="fa"
                {...fa_Props}
              ></Form.Control>
              {formik.touched.fa &&
              formik.errors.fa ? (
                <div className="text-danger fw-bold">
                  {formik.errors.fa}
                </div>
              ) : null} 
            </Col>
            <Col lg={2} sm={2} md={2} xs={2} className="border-dark border-end">
              <Form.Control
                type="number"
                value={form.fa_oral}
                name="fa_oral"
                placeholder="Enter the Marks"
                {...fa_oral_Props}

              ></Form.Control>
              {formik.touched.fa_oral &&
              formik.errors.fa_oral ? (
                <div className="text-danger fw-bold">
                  {formik.errors.fa_oral}
                </div>
              ) : null}
              
            </Col>
            <Col
              lg={2}
              sm={2}
              md={2}
              xs={2}
              className="border-end border-dark border-end"
            >
              <Form.Control
                type="number"
                value={form.sa}
                name="sa"
                {...sa_Props}
                placeholder="Enter the Marks"
              ></Form.Control>
              {formik.touched.sa &&
              formik.errors.sa ? (
                <div className="text-danger fw-bold">
                  {formik.errors.sa}
                </div>
              ) : null}
            </Col>

            <Col lg={2} sm={2} md={2} xs={2} className="border-end border-dark">
              <Form>
                <Form.Control
                  type="number"
                  value={form.sa_oral}
                  name="sa_oral"
                  {...sa_oral_Props}
                  placeholder="Enter the Marks"
                >
                </Form.Control>
                {formik.touched.sa_oral &&
              formik.errors.sa_oral ? (
                <div className="text-danger fw-bold">
                  {formik.errors.sa_oral}
                </div>
              ) : null}
                
              </Form>
            </Col>
            <Col lg={1} sm={1} md={1} xs={1} className=" border-dark ">
              <Row className=" border-dark">
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
              </Row>
            </Col>
          </Row>
          <div className="m-1 fs-4">
            {data.map((el, i) => {
              
                return(
              <Row className="mt-3 border border-dark" key={i}>
                <Col className=" border-end border-dark">{el.subject}</Col>
                <Col className=" border-end border-dark">{el.fa}</Col>
                <Col className=" border-end border-dark">{el.fa_oral}</Col>
                <Col className=" border-end border-dark">{el.sa}</Col>

                <Col>{el.sa_oral}</Col>
                <Col>{el.total}</Col>

                <Col>
                  <Button onClick={()=>{handleEdit(el,i)}} className="btn btn-info">
                    <FiEdit2 />
                  </Button>
                </Col>
                <Col>
                  <Button onClick={()=>{handleDelete(el,i)}} className="btn btn-danger ">
                    <MdDelete />
                  </Button>
                </Col>
              </Row>)
              
})}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{handleClick()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
