import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button } from 'react-bootstrap'
const FirstPage = () => {
    const history = useNavigate();
   
  return (
    <main  style={{ height:'100vh',backgroundColor:"#2C3A6B"}}>
    
     <Container className='d-flex justify-content-center align-items-center flex-column' style={{height:'80vh'}} >
        <Row  >
            <Col sm={12} style={{color:'white'}} >
            <p>
                Let's begin with a<br/> fresh start...
            </p>
          
            </Col>
            
      
        </Row>
        <Row>
            
            <Col sm={12} className='d-flex justify-content-center align-items-center flex-column ' >
            <Button variant="primary" type="submit" style={{width:'80vw' , backgroundColor:'#91B9C5B2'}} onClick={()=>history("/SecondPage")}  className='my-1'>
    
   Follow my suggestions
    </Button>
    <Button  type="submit" style={{width:'80vw' , backgroundColor:'#91B9C5B2'}} onClick={()=>history("/CreateHabit")} >
    
  Create your Own
    </Button>
    <Button  type="submit" style={{width:'80vw' , backgroundColor:'#91B9C5B2'}} onClick={()=>history("/HabitList")} className='my-1' >
    
   Habit Tracker
      </Button>
            </Col>
        </Row>
    </Container>
    </main>
  )
}

export default FirstPage