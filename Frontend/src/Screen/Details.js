import React,{useState} from 'react'
import {Container,Row,Col,Button,Alert} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
 import { Checkbox } from 'antd';
import axios from 'axios'




const Details = ({children}) => {

  

    const location = useLocation();
    const [show, setShow] = useState(true);
    const [name,setName]=useState(location.state.name)
    const[days,setDays]=useState([])
   const [error,setError]=useState()
    const [text,setText]=useState('')
    const history = useNavigate();
    const[message,setMessage]=useState()
    const back = '< Back '
    const[data,setData]=useState()
    const [start, setStart] = React.useState();
    const [completedOn, setCompletedOn] = React.useState();
    const [end, setEnd] = React.useState();
    

   
   function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
  setDays(checkedValues)

}
  
  
 
    const handleChange = (newValue) => {
      setStart(newValue);
      setCompletedOn(newValue)
    
   
    };
    const handleDate = (newValue) => {
        setEnd(newValue);
      };
const submitHandler=async()=>{
  console.log(name)
  console.log(start)
  console.log(end)
  setShow(true)
  try {
    const {data} = await axios.post("/habit/create",{name,start,end,days,text,completedOn})
    if(data){
      setMessage('Habit is created')
      setData(data)
    }
  } catch (error) {
    const Err =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    setError(Err)
  }


}
if(data){
  setTimeout(()=>{
   
      history("/habitList")
    
},3000)
}
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
    {/* go back to previous page just pass -1 in history if want to go forward pass 1 */}
    <Row className='py-2' style={{backgroundColor:'#91B9C5B2'}}>
        <Col  >
    <button onClick={()=>history(-1)} style={{background:'none',border:'none'}} className='my-1'> {back} </button>
        </Col>
        <Col >
    <h3 style={{marginLeft:'-55px'}}>{name}</h3>
        </Col>
    </Row>
    <Container  className='mt-3' style={{ height:'80vh'}}>
    {show && error && (
            <Alert
              variant="danger"
              style={{ textAlign: "center" }}
              onClose={() => setShow(false)}
              dismissible
            >
              {error}
            </Alert>
          )}
          {show && message && (
            <Alert
              variant="success"
              style={{ textAlign: "center" }}
              onClose={() => setShow(false)}
              dismissible
            >
              {message}
            </Alert>
          )}
        <Row className='my-3' >
            <Col >
        <TextField className='float-end' style={{width:'60vw'}} id="standard-basic" label="Name" variant="standard" value={name} />
            </Col>
      
        </Row>
        <Row className='mt-4'><Col> 
        <LocalizationProvider dateAdapter={AdapterDateFns}><MobileDatePicker
          label="Start Date"
          inputFormat="MM/dd/yyyy"
          value={start}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider></Col>
        <Col> <LocalizationProvider dateAdapter={AdapterDateFns}><MobileDatePicker
          label="End Date"
          inputFormat="MM/dd/yyyy"
          value={end}
          onChange={handleDate}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider></Col></Row>
        <Row className='my-3 ' >
            <h5>Frequency:</h5>
<Row >

<Checkbox.Group style={{ width: '100vw' }} onChange={onChange}>
     <Row>
       <Col xs={2}>
         <Checkbox value="Monday">M</Checkbox>
       </Col>
       <Col xs={2} >
         <Checkbox value="Tuesday">T</Checkbox>
      </Col>
       <Col xs={2}>
         <Checkbox value="Wednesday">W</Checkbox>
       </Col>
       <Col xs={2}>
         <Checkbox value="Thursday">Th</Checkbox>
       </Col>
      <Col xs={2}>
       <Checkbox value="Friday">F</Checkbox>
       
     </Col>
     <Col xs={2}>
       <Checkbox value="Saturday">S</Checkbox>
       
     </Col>
     <Col xs={2}>
       <Checkbox value="Sunday">S</Checkbox>
       
     </Col>
    
  </Row>
</Checkbox.Group>
   
   </Row>
        </Row>
        <Row>
            <Col> <TextField
            className='ms-2'
            style={{width:'85vw'}}
          id="outlined-multiline-static"
          label="Note"
          placeholder='Type Here'
          multiline
          rows={4}
          value={text}
          onChange={(e)=>setText(e.target.value)}
        /></Col>
           </Row>
        
    </Container>
   <Button  style={{width:'100vw' , backgroundColor:'#91B9C5B2',height:'13vh'}} type='submit' onClick={submitHandler}>DONE</Button>
    </>
  )
}

export default Details









