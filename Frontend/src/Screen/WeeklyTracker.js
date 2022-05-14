import React,{useEffect,useState} from 'react'
import { Container,Row,Col,Navbar,Nav,Table } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

const WeeklyTracker = () => {
    const history = useNavigate();
    const[data,setData]=useState()
    const [loading,setLoading]=useState(true)

    useEffect( ()=>{
        const getHabitList=async()=>{
            try {
                const {data} = await axios.get("/habit")
                if(data){
                   console.log(data)
                    setData(data)
                    setLoading(false)
                    
    
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
        <Col>  <Navbar  variant="light">
    <Container>
    
    <Nav className="me-auto">
        <Nav.Link onClick={()=>history("/HabitList")}>Daily</Nav.Link>
        <Nav.Link onClick={()=>history("/WeeklyTracker")}   ><h6>Weekly</h6></Nav.Link>
        <Nav.Link onClick={()=>history("/MonthlyTracker")}>Monthly</Nav.Link>
    </Nav>
    </Container>
  </Navbar></Col>
      
    </Row> </Container>
 
<Container  style={{height:'81vh'}}>
  
    <Row >
        
    <Table >
  <thead>

    <tr>
     
      <th> Name</th>
      <th>M</th>
      <th>T</th>
      <th>W</th>
      <th>Th</th>
      <th>F</th>
      <th>S</th>
      <th>S</th>
  
    </tr>
  </thead>
  <tbody>
      {data && data.map((p,index)=>{
          const {name,days}=p
          return(
    <tr key={index}>
    <td>{name}</td>
    
   {days.map((d,index)=>{
       return(
    //    <td key={index}>< CheckCircleIcon/></td> 
    <td key={index}><CheckCircleOutlineSharpIcon/></td>
       
       )
   })}
   
    </tr>
)
      })}
      
      
    
  </tbody>
</Table>
    
    </Row>
</Container></>

  )
}

export default WeeklyTracker