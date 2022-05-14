import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button } from 'react-bootstrap'


const HealthBeauty = () => {
    const history = useNavigate();
    const [name,setName]=useState('')
    const back='< Back'
  return (
   <main style={{ height:'100vh',backgroundColor:"#2C3A6B"}}>
      {/* go back to previous page just pass -1 in history if want to go forward pass 1 */}
      <Row className='py-2' style={{backgroundColor:'#91B9C5B2'}}>
        <Col className=' float-start'><button onClick={()=>history(-1)} style={{background:'none',border:'none'}} className='my-1 '> {back} </button></Col></Row>
      
   <Container className='d-flex justify-content-center align-items-center flex-column' style={{height:'87vh'}} >
        <Row  >
            <Col sm={12} >
            <p className='text-center'  style={{color:'white'}}>
                How About one of these?
            </p>
          
            </Col>
            <Row>
            
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 mb-4  ms-2' >
               
                <Button variant="primary" type="submit" style={{width:'40vw' , backgroundColor:'#91B9C5B2', height:'15vh'}}   onClick={()=>setName( '  Drink Water')} >
    
                Drink Water
    </Button>
    <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'#91B9C5B2', height:'15vh'}}  onClick={()=>setName( ' Eat vegetables')} >
   Eat Vegetables
 
      </Button>
              
           
            
            </Col>
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 ms-2' >
               
          
   <Button variant="primary" type="submit" style={{width:'41vw', backgroundColor:'#91B9C5B2', height:'15vh'}} onClick={()=>setName( 'Work Out')}  >
Work Out
 
     </Button>
     <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'#91B9C5B2', height:'15vh'}}  onClick={()=>setName('Sleep Early')} >
   
   Sleep Early
</Button>
             
          
           
           </Col>
        </Row> 
           
        </Row>
   
    </Container>
    {name ? (<Button variant="primary" type="submit" style={{width:'100vw' , backgroundColor:'#91B9C5B2'}} onClick={()=>history('/details',{state:{name:name}})} >
    
    LET'S GET STARTED!
    </Button>):(<Button variant="primary" type="submit" style={{width:'100vw' , backgroundColor:'#91B9C5B2'}} disabled onClick={()=>history('/details',{state:{name:name}})} >
    
    LET'S GET STARTED!
    </Button>)}</main>
  )
}

export default HealthBeauty