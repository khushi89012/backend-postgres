import { Container, Row, Col } from "react-bootstrap"
import { Part3f } from "../Redux/action"
import {useSelector, useDispatch} from "react-redux";
import React,{ useState, useEffect} from 'react'

export default function Part3() {
    const part = useSelector(state=>state.part3)
    console.log("Part 3 is displaying here ",part)
    const [data,setData] = useState([]);

    useEffect(()=>{
        setData([...part])
    },[part])


    
    

  
    return (
        <Container >
            <span  className="text-center fs-5 fw-bold p-2">Part-III : Attendence</span>

            <Row className="border text-center border-dark border-top border-start border-end fw-bold">

                <Col lg={2} md={2} sm={2} xs={2} className="col col-lg-1"></Col>
                <Col lg={4} md={4} sm={4} xs={4} className="col border-start border-dark ">No. Of Working Days</Col>
                <Col lg={4} md={4} sm={4} xs={4} className="col border-start border-dark">No. Of Days Present</Col>
                <Col lg={2} md={2} sm={2} xs={2} className="col border-start border-dark text-wrap">Percentage</Col>
            </Row>
            {data.map((el,i)=>(

            <Row className="border text-center border-dark border-top-0 border-start border-end fw-bold">
                <Col lg={2} md={2} sm={2} xs={2} className="col col-lg-1 p-1 "> TERM - I </Col>

                <Col lg={4} md={4} sm={4} xs={4} className="col border-start border-dark p-1">{el.no_of_working_day}</Col>
                <Col lg={4} md={4} sm={4} xs={4} className="col border-start border-dark p-1">{el.no_of_day_present}</Col>
                <Col lg={2} md={2} sm={2} xs={2} className="col border-start border-dark p-1">{((el.no_of_day_present / el.no_of_working_day) *100).toFixed(2)}</Col>

</Row>
))}

        </Container>
    )
}

