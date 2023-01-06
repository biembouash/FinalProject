import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(props: any){
  //Logout Handler
    const handleLogout = () =>{
      props.state.logoutUser();
      props.state.showBlogList();
      alert("Logged out")
    }
    //The header component
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Welcome {props.state.user.name}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => props.state.showBlogList()}>Home</Nav.Link>
                {!props.state.logged && <Nav.Link onClick={() => props.state.showLogin()}>Login</Nav.Link>}
                {!props.state.logged && <Nav.Link onClick={() => props.state.showRegister()}>Register</Nav.Link>}
                {props.state.logged && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
                {props.state.logged && <Nav.Link onClick={() => props.state.showPostBlog()} >Post Blog</Nav.Link>}
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}