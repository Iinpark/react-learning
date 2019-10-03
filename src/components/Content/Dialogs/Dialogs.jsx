import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";


{
  /* User ID randomiser
   * will work wery soon
   * (i hope so)*/
}
const Dialogs = props => {

    let DialogsElements = props.UsersBase.map(dialog => (
        <DialogItem name={dialog.user} id={dialog.id} />
    ));
    let MessagesElements = props.MessagesBase.map(UD => (
        <Message message={UD.message} id={UD.id}/>
    )); // извлекаем данные из датабазы и закадываем в пропсы


  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        {DialogsElements}
      </div>
      <div className={styles.Messages}>
        {/*TODO: сделать месседжи отдельной компонентой и сверстать*/}

        {MessagesElements}

      </div>
    </div>
  );
};

export default Dialogs;
