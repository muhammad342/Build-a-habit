import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button } from 'react-bootstrap'
const Options = ({opt1,opt2,opt3,opt4}) => {
    const history = useNavigate();
  return (
  <>
   
        
        <Row>
            
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 mb-4  ms-2' >
               
                <Button variant="primary" type="submit" style={{width:'40vw' , backgroundColor:'grey', height:'15vh'}}   >
    
 {opt1}
    </Button>
    <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}}   >
    
   {opt2}
      </Button>
              
           
            
            </Col>
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 ms-2' >
               
               <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}}  >
   
{opt3}
   </Button>
   <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}}  >
   
 {opt4}
     </Button>
             
          
           
           </Col>
        </Row>
  </>
  )
}

export default Options