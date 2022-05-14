import React from 'react'
import { Container,Row,Table } from 'react-bootstrap'

import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

const Tracker = ({data}) => {
  return (
    <>
 
      
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
  

    </>
  )
}

export default Tracker