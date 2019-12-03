import React, { Component } from 'react';
import Navbar, { NavbarText } from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
 import logo from '../../res/images/logo.jpg'
import {Link} from 'react-router-dom'
class Topnav extends Component {


  
render() {
  var d =new Date()
  
 
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
           <Navbar.Brand  as={Link} to="/"   style={{padding: "4px;margin:auto"}}>   
            <img src={logo}style={{height:"55px",width:" auto",borderRadius:"50%"}} title="mycompanylogo"/>
            </Navbar.Brand>
  <Navbar.Brand as={Link} to="/">TWIPASS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="ABOUT" id="collasible-nav-dropdown" className="dropdown">
        <NavDropdown.Item as={Link} to="/">BOARD OF GOVERNORS</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">ADMINISTRATION</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">OUR HISTORY</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">OUR VISION AND MISSIONS</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">PTA</NavDropdown.Item>
       <NavDropdown.Divider />
       <Navbar>DEVELOPMENTAL PROJECT
       <NavDropdown title="DEVELOPMENTAL PROJECT" id="collasible-nav-dropdown" >
       <NavDropdown.Item as={Link} to="/">PTA & PARTNERS</NavDropdown.Item>
       <NavDropdown.Item as={Link} to="/">ALUMINI PROJECTS</NavDropdown.Item>
       </NavDropdown>
       </Navbar>
    
       <NavDropdown.Item as={Link} to="/contact-us">CONTACT US</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">ALUMINI PROJECT</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="ADMISSIONS" id="collasible-nav-dropdown" className="dropdown">
        <NavDropdown.Item as={Link} to="/">PROCESS</NavDropdown.Item>
<NavDropdown.Item as={Link} to="/">NEW ADMISSION - {d.getFullYear()}</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">PROSPECTORS</NavDropdown.Item>
        <NavDropdown.Divider />
       
       <Navbar>FACILITIES
        <NavDropdown title="FACILITIES" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to="/">ACADEMIC FACILITIES</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">ADMINISTRATION & SOCIAL FACILITIES</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">BOARDING FACILITIES</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">DINING (MENU)</NavDropdown.Item>
       
          </NavDropdown>
          </Navbar>
      </NavDropdown>
      <NavDropdown title="ACADEMICS" id="collasible-nav-dropdown" className="dropdown">
        <NavDropdown.Item as={Link} to="/">PROGRAMME OF STUDY</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">STAFF AND DEPARTMENTS</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">AWARD AND ACHIEVEMENT</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">CALENDAR / ANNOUNCEMENT</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="STUDENTS" id="collasible-nav-dropdown" className="dropdown">
        <NavDropdown.Item as={Link} to="/">ALUMINI</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">PREFECT & SRC</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">CHECK RESULTS</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="CAMPUS" id="collasible-nav-dropdown" className="dropdown">
        <NavDropdown.Item as={Link} to="/">GALLERY</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">LIFE IN TWIPASS</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">EXTRA CURRICULAR</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">SPORTS</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">NEWS</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="PORTALS" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/">STUDENT PORTAL</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">STAFF PORTAL</NavDropdown.Item>
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