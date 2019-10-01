import React from "react"
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";




const DialogItem = props => {
    let Path = "/Dialogs/" + props.id;
    return (
        <div className={styles.dialog + "" + styles.active}>
            <NavLink to={Path}>{props.name}</NavLink>
        </div>
    );
};

export default  DialogItem;
