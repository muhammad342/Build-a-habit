import React,{useState} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


import {Form } from 'react-bootstrap'



const Details = ({children}) => {

  const [checked, setChecked] = React.useState(false);
  const [checkedT, setCheckedT] = React.useState(false);
  const [checkedTh, setCheckedTh] = React.useState(false);
  const [checkedF, setCheckedF] = React.useState(false);

  const [checkedFi, setCheckedFi] = React.useState(false);

  const [checkedS, setCheckedS] = React.useState(false);

  const [checkedSe, setCheckedSe] = React.useState(false);

    const location = useLocation();
    // const[checkOne,setCheckOne]=useState('')
    // const[checkTwo,setCheckTwo]=useState('')
    // const[checkThree,setCheckThree]=useState('')
    // const[checkFour,setCheckFour]=useState('')
    // const[checkFive,setCheckFive]=useState('')
    // const[checkSix,setCheckSix]=useState('')
    // const[checkSeven,setCheckSeven]=useState('')
    const [name,setName]=useState(location.state.name)
    const[days,setDays]=useState([])
   
    const [text,setText]=useState('')
    const history = useNavigate();

    const back = '< Back '
    const [start, setStart] = React.useState();
    const [end, setEnd] = React.useState();
    // const data = [
    //   {
    //     id: "1",
    //     name: "Monday",
        
    //   },
    //   {
    //     id: "2",
    //     name: "Tuesday",
       
    //   },
    //   {
    //     id: "3",
    //     name: "Wednesday",
      
    //   },
      // {
      //   id: "4",
      //   name: "Thursday",
       
      // },
      // {
      //   id: "5",
      //   name: "Friday",
       
      // },
      // {
      //   id: "6",
      //   name: "Saturday",
       
      // },
      // {
      //   id: "7",
      //   name: "Sunday",
       
      // }
    // ];

    const handleCheck = () => {
      setChecked(!checked);
      if(!checked){
        console.log("checked")
       
        
      days.push('monday')
      
       
        console.log(days)
      }
    };
    const handleCheckO = (event) => {
      setCheckedT(event.target.checked);
      if(!checkedT){
        console.log("checked")
        
       days.push('Tuesday')
       
        console.log(days)
      }
    };
    const handleCheckT = (event) => {
      setCheckedTh(event.target.checked);
      if(!checkedTh){
        
       days.push('Wednesday')
       
        console.log(days)
      }
    };
    const handleCheckTh = (event) => {
      setCheckedF(event.target.checked);
      if(!checkedF){
        
       days.push('Thursday')
       
        console.log(days)
      }
    };
    const handleCheckF = (event) => {
      setCheckedFi(event.target.checked);
      if(!checkedFi){
        console.log("checked")
        
       days.push('Friday')
       
        console.log(days)
      }
    };
    const handleCheckFi = (event) => {
      setCheckedS(event.target.checked);
      if(!checkedS){
       
       days.push('Saturday')
       
        console.log(days)
      }
    };
    const handleCheckS = (event) => {
      setCheckedSe(event.target.checked);
      if(!checkedSe){
        console.log("checked")
        
       days.push('Sunday')
       
        console.log(days)
      }
    };
    const handleChange = (newValue) => {
      setStart(newValue);
    
   
    };
    const handleDate = (newValue) => {
        setEnd(newValue);
      };
const submitHandler=()=>{
  const newDays= [...new Set(days)]
  console.log(newDays)

}

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
    {/* go back to previous page just pass -1 in history if want to go forward pass 1 */}
    <Row className='my-2'>
        <Col  >
    <button onClick={()=>history(-1)} style={{background:'none',border:'none'}} className='my-1'> {back} </button>
        </Col>
        <Col >
    <h3 style={{marginLeft:'-55px'}}>{name}</h3>
        </Col>
    </Row>
    <Container  className='mt-3' style={{ height:'86vh'}}>
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
{/* {data.map((item)=>{
  return(
    <main className="mb-3 d-flex justify-content-center">
    <Form style={{height:'15vh'}}> <div key={'inline-checkbox'} >
    <Form.Check className="mb-3 d-flex justify-content-center"
        inline
        // checked={checked}
        onChange={(e) => {
       
          if (e.target.checked) {
            setDays([
              ...days,
              {
               
                name: item.name,
                
              },
            ]);
          } else {
            // remove from list
            setDays(
              days.filter((people) => people.name !== item.name),
            );
          }
          console.log(days)
        }}
      
        label={item.name}
        name="group1"
        type='checkbox'
        id={'inline-checkbox-1'}
      />
      </div>
      </Form>
    </main>
  )
})} */}

    <Form style={{height:'15vh'}}> <div key={'inline-checkbox'} className="mb-3">
      <Form.Check
        inline
        checked={checked}
      onChange={handleCheck}
      
        label="M"
        name="group1"
        type='checkbox'
        id={'inline-checkbox-1'}
      />
      <Form.Check
        inline
        checked={checkedT}
      onChange={handleCheckO}
     
        label="T"
        name="group1"
        type='checkbox'
        id={'inline-checkbox-2'}
      />
      <Form.Check
        inline
        checked={checkedTh}
        onChange={handleCheckT}
        
        label="W"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        checked={checkedF}
        onChange={handleCheckTh}
       
        label="Th"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        checked={checkedFi}
        onChange={handleCheckF}
    
        label="F"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        checked={checkedS}
        onChange={handleCheckFi}
      
        label="S"
        type='checkbox'
        id={'inline-checkbox-3'}
      />
       <Form.Check
        inline
        checked={checkedSe}
        onChange={handleCheckS}
      
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
   <Button  style={{width:'100vw' , backgroundColor:'grey'}} type='submit' onClick={submitHandler}>DONE</Button>
    </>
  )
}

export default Details