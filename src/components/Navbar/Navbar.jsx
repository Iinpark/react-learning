import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import PageInfo from "../Content/PageInfo/PageInfo";
import Posts from "../Content/posts/Posts";
import Dialogs from "../Content/Dialogs/Dialogs";
import Container from "react-bootstrap/Container";

const Navbar = () => (
  <Container fluid>
    <div className={classes.navigation}>
      <div className={classes.darkBlack}>
        <NavLink className={classes.navIcon} to="/Feed" component={Posts}>
          <em className="fa fa-home"></em>
          <span>Лента</span>
        </NavLink>
      </div>
      <div className={classes.cleanBlack}>
        <NavLink
          className={classes.navIcon}
          to="/PageInfo"
          component={PageInfo}
        >
          <em className="fa fa-home"></em>
          <span>Профиль</span>
        </NavLink>
      </div>
      <div className={classes.darkBlack}>
        <NavLink className={classes.navIcon} to="/Dialogs" components={Dialogs}>
          <em className="fa fa-home"></em>
          <span>Диалоги</span>
        </NavLink>
      </div>
    </div>
  </Container>
);

export default Navbar;
