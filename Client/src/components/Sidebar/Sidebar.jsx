import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Formex1} from '../Forms/Part1'
import {Formex2} from '../Forms/Part2'
import {Formex3} from '../Forms/Part3'
export const Sidebar = ()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Create Your Scorecard
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Title>Select The Category</Offcanvas.Title>
      <Formex1/>
      <br></br>
      <Formex2/>
      <br></br>
      <Formex3/>
 
      </Offcanvas>
    </>
  );
}

