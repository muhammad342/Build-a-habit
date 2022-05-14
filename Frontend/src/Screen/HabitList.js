import React,{useState,useEffect} from 'react'
import {Container,Row,Col,ListGroup,Navbar,Nav} from 'react-bootstrap'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

const HabitList = () => {
    const history = useNavigate();
    const [loading,setLoading]=useState(true)
   const [day,setDay]=useState()


    const[data,setData]=useState()
    const today = new Date();

   
    

useEffect( ()=>{
    
    const check=today.getDay()
    console.log(check)
              if(check === 1){
               setDay('Monday')
              
              }
              else if(check === 2){
                setDay('Tuesday')
              }
              else if(check === 3){
                setDay('Wednesday')
              }
              else if(check === 4){
                setDay('Thursday')
              }
              else if(check === 5){
                 setDay('Friday')
              }
              else if(check === 6){
                setDay('Saturday')
                console.log('m')
              }
              else{
               setDay('Sunday')
              }
   
   
    const getHabitList=async()=>{
     
      
    
        try {
            console.log(day)
            
                const {data} = await axios.get(`/habit/${day}`)
                if(data){
               
                    setData(data)
                    setLoading(false)
    
                }
            
              
           
           
        } catch (error) {
            
        }
       
    }
  getHabitList()
  

},[day])

const habitHandler=(id)=>{
    
    history('/Completed',{state:{id:id}})
}
  return (
    <> 
    <Container   style={{backgroundColor:'#91B9C5B2' , position:' sticky ',top: '0',zIndex:'1'}}>
        <Row className='py-2 mb-2'>
        <Col>  <Navbar  variant="light">
    <Container>
    
    <Nav className="me-auto">
        <Nav.Link onClick={()=>history("/HabitList")}><h6>Daily</h6></Nav.Link>
        <Nav.Link onClick={()=>history("/WeeklyTracker")}>Weekly</Nav.Link>
        <Nav.Link onClick={()=>history("/MonthlyTracker")}>Monthly</Nav.Link>
    </Nav>
    </Container>
  </Navbar></Col>
            
        </Row> </Container>
     
    <Container style={{height:'81vh'}}>
      
        <Row  >
         {loading ?    <CircularProgress /> :  (  data &&  data.length>0 ?  data.map((h)=>{
                return(
                    <Col key={h._id} xs={12}>
<ListGroup>
 
  <ListGroup.Item className='my-2' variant="info" onClick={()=>habitHandler(h._id)}>{h.name}
  </ListGroup.Item>
 
</ListGroup>
                    </Col>
                )
            }) : <Row>
                <Col>
                <h6 className=' text-center'>No habit on this day</h6>
                </Col>
            </Row>

  ) 
        }  
        </Row>
    </Container>
   
    </>
  )
}

export default HabitList