import React, { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {Container,Row,Col,Button} from 'react-bootstrap'
import axios from 'axios' 

const MarkHabit = () => {
    const location = useLocation();
    const[habit,setHabit]=useState()
    const history = useNavigate();
    const[id,setId]=useState(location.state.id)
    const submitHandler=()=>{
        console.log('submitted')
    }
  
    useEffect(()=>{
        const getHabit=async()=>{
          
        console.log(id)
            const {data}= await axios.get(`/habit/today/${id}`)
            
            if(data){
                setHabit(data)
            }
        } 
        getHabit()


    },[])
     
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
            <Button variant="primary" type="submit" style={{width:'80vw' , backgroundColor:'#91B9C5B2'}} onClick={submitHandler}  className='my-1'>
    
  Yes
    </Button>
    <Button  type="submit" style={{width:'80vw' , backgroundColor:'#91B9C5B2'}} onClick={()=>history("/HabitList")} >
No
    </Button>
    
            </Col>
        </Row>
    </Container>
    </main>
  )
}

export default MarkHabit