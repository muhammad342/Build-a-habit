import React from 'react'
import {Form,Button,Container,Row,Col,Image } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const history = useNavigate();
   
  return (
    <>
    <Container  >
        <Row  style={{height:'90vh'}} className='d-flex align-items-center '>
        
            <Col > <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
 
</Form></Col>
        </Row>
      
    </Container>
    <Button variant="primary" type="submit" style={{width:'100vw' ,  backgroundColor:'#91B9C5B2',height:'10vh'}} onClick={()=>history("/home")} >
    
    Sign In
    </Button>
   
    </>
  )
}

export default Login