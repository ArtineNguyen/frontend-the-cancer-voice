import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
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
  console.log(props.currentUser)
  return (
    <div className="navBar">

      <Navbar collapseOnSelect variant="light" expand="lg">
        <Container md={{ span: 6, offset: 3 }}>
          <Navbar.Brand brand="The Cancer Voice" href="#home">
            <div><img alt="" src="/logo.png" width="150" height="150" className="d-inline-block align-top"
            /></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="basic-navbar-nav">
            <ul className="navbar-nav mr-auto"></ul>
            <Navbar className="main-menu">
              <Nav.Link href="/"><i class="fa fa-home d-md-none"></i>Home</Nav.Link>
              <Nav.Link href="/about"><i class="far fa-compass d-md-none"></i>About Us</Nav.Link>
              <Nav.Link href="/event"><i class="far fa-calendar-check d-md-none"></i>Event</Nav.Link>
              <Nav.Link href="/upload-post"><i class="fas fa-book-open d-md-none"></i>Blog</Nav.Link>
              <Nav.Link href="/contact"><i class="far fa-address-book d-md-none"></i>Contact</Nav.Link>

              {props.currentUser ? <>
                <NavDropdown title={props.currentUser && props.currentUser.name} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => logOut()}>Log Out</NavDropdown.Item>
                </NavDropdown>

                {/* // {props.currentUser ? <>
              //   <div className="dropdown">
              //     <button>
              //       {props.currentUser && props.currentUser.name}
              //     </button>
              //     <div className="dropdown-menu "aria-labelledby="dropdownMenuButton">
              //       <div className="dropdown-item site-btn" onClick={() => logOut()}>Log Out</div>
              //     </div>
              //   </div> */}
                {/* <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div> */}
              </> : <Nav.Link href="/login">Login</Nav.Link>
              }


            </Navbar>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
