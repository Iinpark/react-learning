import React from "react";
import Post from "./post";
import styles from "./Posts.module.css";
import {  CREATE_NEW_POST} from "../../../Redux/State/Store";

const Posts = props => {
  // вытаскиваем посты из пропсов и отрисовываем
  let PostsElements = props.PostsBase.map(PostsBase => (
    <Post
      avatar={PostsBase.PostAvatar}
      user={PostsBase.PostAutor}
      content={PostsBase.PostContent}
    />
  ));

  let PostTextArea = React.createRef();
  let NewPost = () => {
    let text = PostTextArea.current.value; //считываем данные из текстареи

    if (text == "") {
      alert("Вы не ввели текст");
    } else {
      props.dispatch(CREATE_NEW_POST(text));
      PostTextArea.current.value = "";
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.PostsWrapper}>
        <div className="row align-content-center">
          <textarea
            className="form-control"
            className={styles.textarea}
            aria-label="With textarea"
            ref={PostTextArea}
          ></textarea>

          <div className="row align-content-center m-0">
            <div className="col">
              <button className="btn btn-primary" onClick={NewPost}>
                Добавить
              </button>
            </div>
          </div>
        </div>
        {PostsElements}
      </div>
    </div>
  );
};
export default Posts;
