import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button } from 'react-bootstrap'
const FirstPage = () => {
    const history = useNavigate();
   
  return (
    <>
    
     <Container className='d-flex justify-content-center align-items-center flex-column' style={{height:'80vh'}} >
        <Row  >
            <Col sm={12} >
            <p>
                Let's begin with a<br/> fresh start...
            </p>
          
            </Col>
            
      
        </Row>
        <Row>
            
            <Col sm={12} className='d-flex justify-content-center align-items-center flex-column ' >
            <Button variant="primary" type="submit" style={{width:'80vw' , backgroundColor:'grey'}} onClick={()=>history("/SecondPage")}  className='my-1'>
    
   Follow my suggestions
    </Button>
    <Button  type="submit" style={{width:'80vw' , backgroundColor:'grey'}} onClick={()=>history("/CreateHabit")} >
    
  Create your Own
    </Button>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default FirstPage