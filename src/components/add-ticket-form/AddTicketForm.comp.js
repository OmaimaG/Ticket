import React from 'react'
import  PropTypes from 'prop-types'
import { Button,Form,FormLabel,Card} from 'react-bootstrap';
import "./addticketform.style.css";
import { Link } from 'react-router-dom';


export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmData}) => {
   
  console.log(frmData)
    return (
    <Card className="mt-3 add-new-ticket bg-light">
      <h1 className='text-info text-center'>ADD NEW TICKET</h1>
<form autoComplete='off' onSubmit={handleOnSubmit}>
<Form.Group>
<FormLabel>Subject </FormLabel>
<Form.Control
minLength={3}
name='subject'
value={frmData.subject}
onChange={handleOnChange}
required
/>
</Form.Group>

<Form.Group >
<FormLabel >issueDate </FormLabel>
<Form.Control
type='date'
name='issueDate'
onChange={handleOnChange}
value={frmData.issueDate}
required
/>
</Form.Group>

<Form.Group>
<FormLabel>   details </FormLabel>
<Form.Control
as='textarea'
name='details'
onChange={handleOnChange}
value={frmData.details}
required
/>
</Form.Group>



<Link to="/dashboard">
<Button type ='submit' variant='info' className="btn btn-primary btn-lg btn-block">ADD Ticket</Button>
</Link>


</form>



    </Card>
    
  )
}
AddTicketForm.propTypes = {
       handleOnSubmit: PropTypes.func.isRequired,
       handleOnChange: PropTypes.func.isRequired,
       frmData: PropTypes.object.isRequired,
    //   frmDataErro: PropTypes.object.isRequired,
     };