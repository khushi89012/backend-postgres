import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Part from "./components/parts/Part1.jsx";
import Part2 from "./components/parts/Part2.jsx";
import Part3 from "./components/parts/Part3.jsx";
import Part4 from "./components/parts/Part4.jsx";
import Header from "./components/Header/Header.jsx";
import Basic from "./components/Forms/Forms";
import React from "react";
import Topnav from "./components/Navbar/navbar.jsx";
import { jsPDF } from "jspdf";
import { html2canvas } from "html2canvas";
import html2PDF from "jspdf-html2canvas";
import { Login } from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { User } from "./components/User/User.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer1 from "./components/Footer/Footer.jsx";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ScoreCard from './components/ScoreCard/ScoreCard.jsx'
import axios from "axios";

function App() {

  
  const handlePrint = () => {
    let page = document.getElementById("print");
    html2PDF(page, {
      jsPDF: {
        format: "a4",
      },
      imageType: "image/jpeg",
      output: "/Download.pdf",
    });
  };

  const data = useSelector((state) => state);
const name = data.user.name
const userclass = data.user.class;
const section = data.user.section
const roll_n = data.user.roll_n

  const part1 = useSelector((state) => state.part1);
  const part2 = useSelector((state) => state.part2);

  const handleClick = () => {
    console.log("whole Data", data);
    // axios.post('http://localhost:8080/addata',{
    //   'Name':name,
    //   'Class':userclass,
    //   'Section':section,
    //   'Roll_n':roll_n
    // }).then((res)=>{
    //   console.log(res)
    // }).catch(err){
    //   console.log(err.message)
    // }
  };

  return (
    <div>
      {/* <Routes>
        <Route to={"/"} element={<Login/>}/>
        <Route to={"/user"} element={<User/>}/>
        <Route to={"/home"} element={}/>
     
      </Routes> */}
      <User/>
      <Dashboard />

      <div className="App" style={{ minWidth: "460px", marginBottom: "100px" }}>
        <Topnav handlePrint={handlePrint} style={{ width: "500px" }} />
        <Container id="print" className="mt-3">
          <Row className="p-0" style={{ border: "5px solid black" }}>
            <Col lg={12} xs={12} md={12} sm={12}>
              {" "}
              <Header />
            </Col>
            <Col
              lg={7}
              xs={12}
              md={12}
              sm={12}
              className="border-end border-dark"
            >
              {" "}
              <Part />{" "}
            </Col>
            <Col lg={5} xs={12} md={12} sm={12}>
              {" "}
              <Part2 />{" "}
            </Col>
            <Col lg={12} xs={12} md={12} sm={12}>
              {" "}
              <Part3 />{" "}
            </Col>
            <Col lg={12} xs={12} md={12} sm={12}>
              {" "}
              <Part4 />{" "}
            </Col>
          </Row>
        </Container>
      </div>
      {part1.length < 2 || part2.length < 2 ? (
        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            cursor: "not-allowed",
          }}
        >
          SEND DATA
        </div>
      ) : (
        <Footer handleSend={handleClick} />
      )}
    </div>
  );
}

export default App;
