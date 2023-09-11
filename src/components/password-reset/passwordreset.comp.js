import React from 'react'
import PropTypes from 'prop-types'
import { Button,Container,Row,Col,Form, FormLabel } from 'react-bootstrap';
export const  ResetPassword  = ({handleOnChange,handleOnResetSubmit, formSwitcher, email} ) => {
  return (
<Container>
<Row>
<Col>
<h1 className='text-center'>reset password</h1>
<hr/>
<form autoComplete='off' onSubmit={handleOnResetSubmit}>
<Form.Group>
<FormLabel>Email Adress </FormLabel>
<Form.Control
type='email'
name='email'
value={email}
onChange={handleOnChange}
placeholder='Enter Email'
/>
</Form.Group>


<Button type ='submit'>rest</Button>


</form>
</Col>
</Row>
<Row>

<Col>
<a href='#!'onClick={()=>formSwitcher('Login')}>Login now</a>
<hr/>
</Col>
</Row>
</Container>
  
  )


}
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    }
