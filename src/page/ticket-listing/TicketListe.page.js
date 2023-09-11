import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllTickets } from './ticketsAction'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import tickets from '../../assets/data/dummy-tickets.json'
export const TicketListe = () => {
const dispatch =useDispatch()
const [dispTicket, setDispatch]=useState(tickets)

useEffect (()=>{
dispatch(fetchAllTickets())

},[str,dispTicket])

const [str,setStr]=useState('')
useEffect (()=>{},[str]);


    const handleOnChange = (e) => {
        setStr( e.target.value);
    
        //dispatch(filterSerachTicket(value));
      };
  return (
 <Container>

 
 <Row className="mt-4">
        <Col>
         
            <Button variant="info">Add New Ticket</Button>
        
        </Col>
        <Col className="text-right">
       <SearchForm  handleOnChange={handleOnChange}
                    str={str}
       
       />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  )
}
