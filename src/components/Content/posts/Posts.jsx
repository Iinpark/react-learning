import React from "react";
import Post from "./post";
import styles from "./Posts.module.css";
import {AllTreeRerender} from "../../../index"
import DialogItem from "../Dialogs/DialogItem";

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
    let text = PostTextArea.current.value;
    props.CreateNewPost(text);
    PostTextArea.current.value = "";
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
