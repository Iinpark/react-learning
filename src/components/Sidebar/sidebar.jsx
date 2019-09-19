import React from "react";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes.side}>
      <ul>
        <li>
          <NavLink to="/PageInfo" activeClassName={classes.a}>
            PageInfo
          </NavLink>
        </li>
        <li>

          <NavLink to="/Posts" activeClassName={classes.a}>
            Posts
          </NavLink>
        </li>
        <li>

          <NavLink to="/Dialogs" activeClassName={classes.a}>
            Dialogs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
