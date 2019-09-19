import React from "react";
import classes from "./header.module.css";
import logo  from "./logo.png";
import logo2 from "./Space_logo.svg"
import {Navbar} from "bootstrap"

const Header = () => {
  return (
      <nav className="navbar">
    <header className={classes.head}>
        <img src={logo2} alt="logo" className={classes.logo}/>
      <span className={classes.logoName}>logo</span>
    </header> </nav>
  );
};

export default Header;
