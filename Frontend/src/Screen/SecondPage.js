import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button } from 'react-bootstrap'
const FirstPage = () => {
    const history = useNavigate();
    const back = '< Back '
  return (
    <>
     {/* go back to previous page just pass -1 in history if want to go forward pass 1 */}
     <button onClick={()=>history(-1)} style={{background:'none',border:'none'}} className='my-1'> {back} </button>
     <Container className='d-flex justify-content-center align-items-center flex-column' style={{height:'80vh'}} >
        <Row  >
            <Col sm={12} >
            <p>
              Choose An area For Your Goal
            </p>
          
            </Col>
            
      
        </Row>
        <Row>
            
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 mb-4 ' >
               
                <Button variant="primary" type="submit" style={{width:'40vw' , backgroundColor:'grey', height:'15vh'}} onClick={()=>history("/health")}  >
    
  Health & Beauty
    </Button>
    <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}} onClick={()=>history("/study")}  >
    
   Study & Work
      </Button>
              
           
            
            </Col>
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 ' >
               
               <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}} onClick={()=>history("/social")}  >
   
Socialize
   </Button>
   <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}} onClick={()=>history("/happy")}  >
   
   Happiness
     </Button>
             
          
           
           </Col>
        </Row>
    </Container>
    </>
  )
}

export default FirstPage