import React ,{ useState,useEffect }from 'react'

import {AddTicketForm }from '../../components/add-ticket-form/AddTicketForm.comp'
import { Container, Row, Col } from "react-bootstrap";

const initialFrmDt ={
subject:"",
issueDate:"",
details:"",

}


export const AddTicket = () => {
const [frmData,setFrmData] =useState(initialFrmDt)
useEffect(()=>{},[frmData])
const handleOnChange = (e) => {
  const { name, value } = e.target;

  setFrmData({
    ...frmData,
    [name]: value,
  });
};
  const handleOnSubmit=(e)=>{
    e.preventDefault();
console.log('Form submit ressui',frmData)




  }

  






  return (
    <Container>
     <Row>
      <Col>
        <AddTicketForm  handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                         frmData={frmData}
        
        
        
        />
      </Col>
    </Row>
  </Container>
  )
}
