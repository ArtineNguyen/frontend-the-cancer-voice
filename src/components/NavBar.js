import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


export default function NavBar(props) {
  const history = useHistory()
  const logOut = async () => {
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    });
    if (resp.ok) {
      localStorage.clear("token");
      props.setCurrentUser(null);
      history.push("/");
    } else {
      alert("Something wrong log out again");
    }
  };

  return (
    <Container>
    <Navbar collapseOnSelect className="site-logo" variant="light" expand="lg" className="responsive-navbar-nav">
      <Navbar.Brand className="header-section" href="#home">
        <img
          alt=""
          src="/logo.png"
          width="180"
          height="180"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav justify-content-end">
      <Nav className="main-menu">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/event">Event</Nav.Link>
        <Nav.Link href="/post">Blog</Nav.Link>
        <Nav.Link href="#link">Donate</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>

   </Container>
  );
  }
