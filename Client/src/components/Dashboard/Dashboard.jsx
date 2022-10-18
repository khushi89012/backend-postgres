import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useFormik} from 'formik'
import Form from 'react-bootstrap/Form';
import * as yup from 'yup'
import { userData } from "../Redux/action";
import { useSelector, useDispatch } from "react-redux";

const initialValues = {
    name:"",
    class:"",
    section:"",
    roll_n:""
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  class: yup.string().required("Class is required "),
  section:yup.string().required("section is required"),
  roll_n:yup.number().required("roll number is required")

})



function Dashboard() {

    const [show, setShow] = React.useState(false);
    
  const dispatch = useDispatch();
    const form = {};
    var formik = useFormik({
        initialValues,
        validationSchema
    })

    const name_prop = formik.getFieldProps("name")
    const class_prop = formik.getFieldProps("class")
    const section_prop = formik.getFieldProps("section")
    const rolln_prop = formik.getFieldProps("roll_n")


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  React.useEffect(()=>{
    form.name = formik.values.name;
    form.class= formik.values.class;
    form.section = formik.values.section;
    form.roll_n = formik.values.roll_n;

  },[formik,form])

const handleClick = ()=>{
  dispatch(userData(formik.values))
  localStorage.setItem("UserData",JSON.stringify(formik.values))
  console.log(formik.values)
  window.location.reload();

}



  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
       
        <div>
        
        </div>
        <Button variant="primary" onClick={handleShow}>
        ADD
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Personal Information </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        value={form.name}
        type="text" 
        placeholder="Enter name" 
        {...name_prop} />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-danger fw-bold" >{formik.errors.name}</div>
        ):null}
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Class</Form.Label>
        <Form.Control
        value={form.class}
         type="text"
          placeholder="Class" 
          {...class_prop} />
           {formik.touched.class &&
              formik.errors.class ? (
                <div className="text-danger fw-bold">
                  {formik.errors.class}
                </div>
              ) : null} 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Section</Form.Label>
        <Form.Control 
        value={form.section}
        type="text" placeholder='section'
         {...section_prop}/>
          {formik.touched.section &&
              formik.errors.section ? (
                <div className="text-danger fw-bold">
                  {formik.errors.section}
                </div>
              ) : null} 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Roll number</Form.Label>
        <Form.Control 
        value={form.roll_n}
        type="Number" 
        placeholder="Number"
         {...rolln_prop} />
          {formik.touched.roll_n &&
              formik.errors.roll_n ? (
                <div className="text-danger fw-bold">
                  {formik.errors.roll_n}
                </div>
              ) : null} 
      </Form.Group>
      
  
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>Submit</Button>
        </Modal.Footer>
      </Modal>
        <div>
        <Button variant="primary">View</Button>
        </div>




    </div>
  )
}

export default Dashboard