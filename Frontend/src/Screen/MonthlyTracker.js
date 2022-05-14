import React,{useEffect,useState} from 'react'
import { Container,Row,Col,Navbar,Nav,ListGroup} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Tracker from '../Component/Tracker'

const MonthlyTracker = () => {
    const history = useNavigate();
    const[data,setData]=useState()
    const back = '< Back '

    useEffect( ()=>{
        const getHabitList=async()=>{
            try {
                const {data} = await axios.get("/habit")
                if(data){
                   console.log(data)
                    setData(data)
                    
    
                }
            } catch (error) {
                
            }
           
        }
        getHabitList()
    
    },[])
  return (
   <>
    <Container   style={{backgroundColor:'#91B9C5B2' , position:' sticky ',top: '0',zIndex:'1'}}>
    <button onClick={()=>history(-1)} style={{background:'none',border:'none'}} className='my-1 '> {back} </button>
    <Row className='py-2 mb-2'>
        <Col>  <Navbar  variant="light">
    <Container>
    
    <Nav className="me-auto">
        <Nav.Link onClick={()=>history("/HabitList")}>Daily</Nav.Link>
        <Nav.Link onClick={()=>history("/WeeklyTracker")}   >Weekly</Nav.Link>
        <Nav.Link onClick={()=>history("/MonthlyTracker")}><h6>Monthly</h6></Nav.Link>
    </Nav>
    </Container>
  </Navbar></Col>
      
    </Row> </Container>
    <Container style={{height:'81vh'}}>
      <Row >
      <ListGroup>
 
 <ListGroup.Item className='my-2' variant="info" >Week 1
 </ListGroup.Item>

</ListGroup>
<Tracker data={data} />
      </Row>
      <Row >
      <ListGroup>
 
 <ListGroup.Item className='my-2' variant="info" >Week 2
 </ListGroup.Item>

</ListGroup>
<Tracker data={data} />
      </Row>
      <Row >
      <ListGroup>
 
 <ListGroup.Item className='my-2' variant="info" >Week 3
 </ListGroup.Item>

</ListGroup>
<Tracker data={data} />
      </Row>
      <Row >
      <ListGroup>
 
 <ListGroup.Item className='my-2' variant="info" >Week 4
 </ListGroup.Item>

</ListGroup>
<Tracker data={data} />
      </Row>
    </Container>
 
</>

  )
}

export default MonthlyTracker