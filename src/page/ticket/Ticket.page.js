import React, { useEffect, useState } from 'react'
import { Button, Container, Row ,Col} from 'react-bootstrap'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.com'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.com'
import { useParams } from 'react-router-dom'

//const ticket=tickets[0]
export const Ticket = () => {

    const {tId}=useParams()
    const [message,setMessage]=useState("")
    const [ticket,setTicket]=useState("")

    useEffect(() => {
      for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === tId) {
          setTicket(tickets[i]);
          continue;
        }
      }
    }, [tId, message]);
    
  const handleOnSubmit =(e)=>{
alert('form submited')

  }
    const handleOnChange = (e) => {
        setMessage(e.target.value);
      };
  return (
 <Container>
    <Row> 
      
        <Col>
        {tId}
        <div className='subject'>Subject:{ticket.subject}</div>
    <div className='date'> Ticket Opened:{ticket.openedDate}</div>
    <div className='status'>Status:{ticket.status}</div>
    </Col>
    <Col >
    
    <Button variant='outline-info'>close Ticket </Button>
    </Col>
    
    </Row>
    <Row>
        <MessageHistory msg={ticket.history}/>
    </Row>
    <Row>
        <UpdateTicket handleOnChange={handleOnChange}
                     handleOnSubmit={handleOnSubmit}
        msg={message } />
    </Row>

 </Container>
  )
}
