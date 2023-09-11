import React from 'react'
import PropTypes from 'prop-types'
import { Button,Container,Row,Col,Form, FormLabel } from 'react-bootstrap';
export const Login = ({handleOnChange,handleOnSubmit,formSwitcher, email,pass} ) => {
  return (
<Container>
<Row>
<Col>
<h1 className='text-center'> Client Login</h1>
<hr/>
<form autoComplete='off' onSubmit={handleOnSubmit}>
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
<Form.Group>
<FormLabel>password </FormLabel>
<Form.Control
type='password'
name='password'
onChange={handleOnChange}
value={pass}
placeholder='password'
/>
</Form.Group>

<Button type ='submit'>Login</Button>


</form>
</Col>
</Row>
<Row>

<Col>
<a href='#!' onClick={()=>formSwitcher('rest')}>Forgot password?</a>
<hr/>
</Col>
</Row>
</Container>
  
  )


}
Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,}
