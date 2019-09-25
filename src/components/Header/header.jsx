import React from "react";
import classes from "./header.module.css";
import logo2 from "./Space_logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
      <Container fluid className={classes.head}>
        <Navbar bg="dark" expand="md" sticky="top">
          <Navbar.Brand>
            <img
              src={logo2}
              alt="logo"
              className="d-inline-block align-content-center"
              height="100px"
            />
            {" React Bootstrap"}
          </Navbar.Brand>
          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className={classes.searchbar}>
                <input
                  className={classes.search_input}
                  type="text"
                  name=""
                  placeholder="Search..."
                />
                <a href="#" className={classes.search_icon}>
                  <i className="fas fa-search"></i>
                </a>
              </div>
            </div>
          </div>
          <Nav.Link>
            <i className="fa fa-bell noti-icon"></i>{" "}
          </Nav.Link>
          <Nav.Link>
            <i className="fa fa-envelope noti-icon"></i>
          </Nav.Link>
        </Navbar>
        <div className="p-2 nav-icon-lg dark-black"></div>
      </Container>

  );
};

export default Header;
