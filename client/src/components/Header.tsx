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
                <Nav.Link onClick={() => props.state.showBlogList()}>Home</Nav.Link>
                <Nav.Link onClick={() => props.state.showLogin()}>Login</Nav.Link>
                <Nav.Link onClick={() => props.state.showRegister()}>Register</Nav.Link>
                {props.state.logged && <Nav.Link onClick={() => props.state.showPostBlog()} >Post Blog</Nav.Link>}
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}