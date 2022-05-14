import React from 'react'
import { Container,Row,Col,Navbar,Nav } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const WeeklyTracker = () => {
    const history = useNavigate();
  return (
   <>
    <Container   style={{backgroundColor:'#91B9C5B2' , position:' sticky ',top: '0',zIndex:'1'}}>
    <Row className='py-2 mb-2'>
        <Col>  <Navbar  variant="light">
    <Container>
    
    <Nav className="me-auto">
        <Nav.Link onClick={()=>history("/HabitList")}>Daily</Nav.Link>
        <Nav.Link onClick={()=>history("/WeeklyTracker")}   ><h6>Weekly</h6></Nav.Link>
        <Nav.Link onClick={()=>history("/MonthlyTracker")}>Monthly</Nav.Link>
    </Nav>
    </Container>
  </Navbar></Col>
        <Col ><h3 className='text-end'>Icon</h3></Col>
    </Row> </Container>
 
<Container>
  
    <Row  style={{height:'81vh'}}>
      
    
    </Row>
</Container></>

  )
}

export default WeeklyTracker