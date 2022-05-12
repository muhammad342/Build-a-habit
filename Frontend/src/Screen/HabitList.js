import React,{useState,useEffect} from 'react'
import {Button,Container,Row,Col,ListGroup,Nav} from 'react-bootstrap'
import axios from 'axios'

const HabitList = () => {
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
 
  <ListGroup.Item className='my-2' variant="info">{h.name}</ListGroup.Item>
 
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