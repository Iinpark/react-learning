import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

{/* User ID randomiser*/}
function getRandomId() {
    return Math.floor(Math.random() * 10);
}

const DialogItem = props => {
  let Path = "/Dialogs/" + props.id;
  return (
    <div className={styles.dialog + "" + styles.active}>
      <NavLink to={Path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = props => {
  return (
    <div className={styles.dialogs}>
      <DialogItem name="Vasya" id={getRandomId()}/>
      <DialogItem name="Vasya" id={getRandomId()}/>
      <DialogItem name="Vasya" id={getRandomId()}/>
      <DialogItem name="Vasya" id={getRandomId()}/>
      <DialogItem name="Vasya" id={getRandomId()}/>
      <DialogItem name="Vasya" id={getRandomId()}/>
    </div>
  );
};

export default Dialogs;
