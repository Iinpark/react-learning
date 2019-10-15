import React from "react";
import Post from "./post";
import styles from "./Posts.module.css";
import {addPost, postInputing} from "../../../Redux/State/State";

const Posts = props => {
  // вытаскиваем посты из пропсов и отрисовываем
  let PostsElements = props.posts.PostsBase.map(PostsBase => (
    <Post
      avatar={PostsBase.PostAvatar}
      user={PostsBase.PostAutor}
      content={PostsBase.PostContent}
    />
  ));

  let PostTextArea = React.createRef();

  let onPostInput = ()=> {
      let newPostContent = PostTextArea.current.value;
      let action = postInputing(newPostContent);
      props.dispatch(action);
    }

  let NewPost = () => {
      let action = addPost()
    props.dispatch(action);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.PostsWrapper}>
          <div className="row align-content-center ">
          <textarea
              className="form-control"
              className={styles.textarea}
              aria-label="With textarea"
              ref={PostTextArea}
              value={props.posts.newPostContent}
              onChange={onPostInput}
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
