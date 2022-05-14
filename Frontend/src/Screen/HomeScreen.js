import React from 'react'
import { useNavigate } from "react-router-dom";
import { Row,Col, Container } from 'react-bootstrap'

const HomeScreen = () => {
    const history = useNavigate();
    
  return (  
  <>
 
  <Row className='d-flex align-items-center my-auto' style={{height:'100vh',backgroundColor:'#2C3A6B',overflowX:'hidden'} }  onClick={()=>history("/FirstPage")}>
      <Col style={{color:'white'}}>  <p className='text-center '>Hye There!</p>
      <p className='text-center' >Welcome To Build-A-Habit</p></Col>
  
     

     
  
    
  </Row>
  
  
  </>
  )
}

export default HomeScreen