import logo from './logo.svg';
import { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Part from './components/parts/Part1.jsx'
import Part2 from './components/parts/Part2.jsx'
import Part3 from './components/parts/Part3.jsx'
import Part4 from './components/parts/Part4.jsx'
import Header from './components/Header/Header.jsx'
import Basic from './components/Forms/Forms'
import React from 'react';
import Topnav from './components/Navbar/navbar.jsx'
import { jsPDF } from "jspdf";
import { html2canvas } from "html2canvas"
import html2PDF from 'jspdf-html2canvas';
import {Login }from './components/Login/Login.jsx'
import {Routes,Route} from 'react-router'
import Dashboard from './components/Dashboard/Dashboard.jsx'




function App() {


  
  




  const handlePrint = () => {
    let page = document.getElementById("print")
    html2PDF(page, {
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: '/Download.pdf'
    });
  }
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={ <Dashboard/>}/>
      
      </Routes>
      
 

      
   

      {/* <div className="App" style={{ minWidth: '460px', marginBottom: '100px' }}>
        <Topnav handlePrint={handlePrint} style={{width:'500px'}}/>
          
        <Container id="print" className='mt-3'>
          <Row className="p-0" style={{ border: "5px solid black" }}>
            <Col lg={12} xs={12} md={12} sm={12}> <Header /></Col>
            <Col lg={7} xs={12} md={12} sm={12} className="border-end border-dark"> <Part /> </Col>
            <Col lg={5} xs={12} md={12} sm={12}> <Part2 /> </Col>
            <Col lg={12} xs={12} md={12} sm={12}> <Part3 /> </Col>
            <Col lg={12} xs={12} md={12} sm={12}> <Part4 /> </Col>
          </Row>
        </Container> */}
      {/* </div> */}

    </div>
  );
}



export default App;
