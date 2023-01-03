import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(props: any){
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Welcome {props.state.user.name}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Login</Nav.Link>
                <Nav.Link href="#pricing">Register</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}