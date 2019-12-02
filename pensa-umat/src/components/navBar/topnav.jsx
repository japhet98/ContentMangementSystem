import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
 import logo from '../../res/images/logo.jpg'
import {Link} from 'react-router-dom'
class Topnav extends Component {
    render() {
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
           <Navbar.Brand  as={Link} to="/"   style={{padding: "4px;margin:auto"}}>   
            <img src={logo}style={{height:"55px",width:" auto",borderRadius:"50%"}} title="mycompanylogo"/>
            </Navbar.Brand>
  <Navbar.Brand as={Link} to="/">PENSA-UMaT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">Another action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>





            </div>
        );
    }
}

export default Topnav;