import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Container,Row,Col,Button } from 'react-bootstrap'



const HealthBeauty = () => {
    const history = useNavigate();
    const [name,setName]=useState('')
    const back = '< Back '
  return (
   <>
      {/* go back to previous page just pass -1 in history if want to go forward pass 1 */}
      <button onClick={()=>history(-1)} style={{background:'none',border:'none'}} className='my-1'> {back} </button>
    <Container className='d-flex justify-content-center align-items-center flex-column' style={{height:'89vh'}} >
        <Row  >
            <Col sm={12} >
            <p className='text-center'>
                How About one of these?
            </p>
          
            </Col>
            <Row>
            
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 mb-4  ms-2' >
               
                <Button variant="primary" type="submit" style={{width:'40vw' , backgroundColor:'grey', height:'15vh'}}   onClick={()=>setName( 'Host a meetup')} >
    
                Host a meetup
    </Button>
    <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}}  onClick={()=>setName( 'Visit a market')} >
    Visit a market
 
      </Button>
              
           
            
            </Col>
            <Col sm={12} className='d-flex justify-content-center align-items-center  gap-4 ms-2' >
               
               <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}}  onClick={()=>setName( ' Phone a friend')} >
   
               Phone a friend
   </Button>
   <Button variant="primary" type="submit" style={{width:'41vw' , backgroundColor:'grey', height:'15vh'}} onClick={()=>setName( '  Hang out with friends ')}  >
   Hang out with friends 
 
     </Button>
             
          
           
           </Col>
        </Row> 
            {/* <Options opt1={"Host a meetup"} opt2={"Visit a market "} opt3={"Phone a friend"} opt4={"Hang out with friends   "} /> */}
        </Row>
   
    </Container>
    {name ? (<Button variant="primary" type="submit" style={{width:'100vw' , backgroundColor:'grey'}} onClick={()=>history('/details',{state:{name:name}})} >
    
    LET'S GET STARTED!
    </Button>):(<Button variant="primary" type="submit" style={{width:'100vw' , backgroundColor:'grey'}} disabled onClick={()=>history('/details',{state:{name:name}})} >
    
    LET'S GET STARTED!
    </Button>)}
    </>
  )
}

export default HealthBeauty