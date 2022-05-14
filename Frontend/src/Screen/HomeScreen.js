import React from 'react'
import { useNavigate } from "react-router-dom";
import { Row,Col, Image } from 'react-bootstrap'

const HomeScreen = () => {
    const history = useNavigate();
    
  return (  
  <>
 
  <Row className='d-flex  align-items-center my-auto' style={{height:'100vh',backgroundColor:'#2C3A6B',overflowX:'hidden'} }  onClick={()=>history("/FirstPage")}>
      <Col style={{color:'white'}} className='d-flex justify-content-center  align-items-center flex-column' > 
      <Image src='../Logo.jpg' className='text-center mb-2'/> <p className='text-center '>Hye There!</p>
      <p className='text-center' >Welcome To Build-A-Habit</p></Col>
  
     

     
  
    
  </Row>
  
  
  </>
  )
}

export default HomeScreen