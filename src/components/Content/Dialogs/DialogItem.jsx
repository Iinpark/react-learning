import React from "react";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let Path = "/Dialogs/" + props.id; //01.10.19будет использоваться для страницы с индивидуальным диалогом

  return (
    <div className={styles.dialog + "" + styles.active}>
      <NavLink to={Path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
