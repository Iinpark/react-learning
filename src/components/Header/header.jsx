import React from "react";
import classes from "./header.module.css";
import logo from "./logo.png";
import logo2 from "./Space_logo.svg";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" expand="md">
      <header className={classes.head}>
        <img src={logo2} alt="logo" className={classes.logo} />
        <span className={classes.logoName}>logo</span>
      </header>
    </Navbar>
  );
};

export default Header;
