import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom';
import  { LinkContainer } from 'react-router-bootstrap';
export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Now you can navigate programmatically to other pages using navigate
    navigate('/entry');
  };


  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
    <Navbar.Brand>
    LOGO
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/add-ticket">
          <Nav.Link>Ticket</Nav.Link>
        </LinkContainer>

        <Nav.Link onClick={handleClick} >Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>




 
  )
}
