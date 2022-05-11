
import React,{useState} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import DateFnsUtils from '@date-io/date-fns';
import {Form } from 'react-bootstrap'
const CreateHabit = ({children}) => {
    const location = useLocation();
    const [name,setName]=useState('')
    const [text,setText]=useState('')
    const history = useNavigate();

    const back = '< Back '
    const [start, setStart] = React.useState();
    const [end, setEnd] = React.useState();

    const handleChange = (newValue) => {
      setStart(newValue);
    
   
    };
    const handleDate = (newValue) => {
        setEnd(newValue);
      };
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
    {/* go back to previous page just pass -1 in history if want to go forward pass 1 */}
    < Row className='py-2' style={{backgroundColor:'#91B9C5B2'}}>
    
        <Col className=' float-start'><button onClick={()=>history(-1)} style={{background:'none',border:'none'}} className='my-1 '> {back} </button></Col>
        <Col >
    <h3 style={{marginLeft:'-55px'}}>Add New Habit</h3>
        </Col>
    </Row>
    <Container  className='mt-3' style={{ height:'80vh'}}> 
        <Row className='my-3' >
            <Col >
        <TextField className='float-end' style={{width:'60vw'}} id="standard-basic" label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)} />
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
<Row>
    <Form style={{height:'15vh'}}> <div key={'inline-checkbox'} className="mb-3">
      <Form.Check
        inline
        label="M"
        name="group1"
        type='checkbox'
        id={'inline-checkbox-1'}
      />
      <Form.Check
        inline
        label="T"
        name="group1"
        type='checkbox'
        id={'inline-checkbox-2'}
      />
      <Form.Check
        inline
        
        label="W"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        
        label="Th"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        
        label="F"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        
        label="S"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        
        label="S"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
    </div></Form>
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
   <Button  style={{width:'100vw' , backgroundColor:'#91B9C5B2',height:'13vh'}} type='submit'>DONE</Button>
    </>
  )
}

export default CreateHabit