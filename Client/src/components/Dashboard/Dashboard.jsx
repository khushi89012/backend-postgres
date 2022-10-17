import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useFormik} from 'formik'
import Form from 'react-bootstrap/Form';
import * as yup from 'yup'


const initialValues = {
    name:"",
    class:"",
    section:"",
    roll_n:""
}



function Dashboard() {

    const [show, setShow] = React.useState(false);
    const form = {};
    const formik = useFormik({
        initialValues
    })

    const name_prop = formik.getFieldProps("name")
    const class_prop = formik.getFieldProps("class")
    const section = formik.getFieldProps("section")
    const roll_n = formik.getFieldProps("roll_n")


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = (e)=>{
    e.preventDefault()


  }

  React.useEffect(()=>{
    form.name = formik.values.name;
    form.class= formik.values.class;
    form.section = formik.values.section;
    form.roll_n = formik.values.roll_n;

  },[formik,form])



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
        <Form.Control type="text" placeholder="Enter name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" placeholder="Class" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Section</Form.Label>
        <Form.Control type="text" placeholder='section' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Roll number</Form.Label>
        <Form.Control type="Number" placeholder="Number" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
        <div>
        <Button variant="primary">View</Button>
        </div>




    </div>
  )
}

export default Dashboard