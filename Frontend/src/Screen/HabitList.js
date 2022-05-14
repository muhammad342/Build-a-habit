import React,{useState,useEffect} from 'react'
import {Container,Row,Col,ListGroup} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const HabitList = () => {
    const history = useNavigate();
    const[data,setData]=useState()
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

const habitHandler=(id)=>{
    console.log(id)
    history('/Completed',{state:{id:id}})
}
  return (
    <> 
    <Container   style={{backgroundColor:'#91B9C5B2' , position:' sticky ',top: '0',zIndex:'1'}}>
        <Row className='py-2 mb-2'>
            <Col><h3>Daily</h3></Col>
            <Col ><h3 className='text-end'>Icon</h3></Col>
        </Row> </Container>
     
    <Container>
      
        <Row  style={{height:'81vh'}}>
            { data && data.map((h)=>{
                return(
                    <Col key={h._id} xs={12}>
<ListGroup>
 
  <ListGroup.Item className='my-2' variant="info" onClick={()=>habitHandler(h._id)}>{h.name}
  </ListGroup.Item>
 
</ListGroup>
                    </Col>
                )
            })}
        
        </Row>
    </Container>
   
    </>
  )
}

export default HabitList