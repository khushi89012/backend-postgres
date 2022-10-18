import React, { useState} from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import "./Login.css";
import { useEffect } from "react";

export const  Login =()=> {

  const [name, setName] = useState("");

  

  const [password, setPassword] = useState("");

  function validateForm() {

    return name.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();
   

  }
  
  useEffect(()=>{
    axios.post("http://localhost:8080/login",{
      "username" : name,
      "password":password
  
    }).then((res)=>{
       console.log(res)
   
    }).catch((err)=>{
      console.log(err.message)
    })
  },[handleSubmit])



  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="email">

          <Form.Label>Name</Form.Label>

          <Form.Control

            autoFocus

            type="text"

            value={name}

            onChange={(e) => setName(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>

  );

}