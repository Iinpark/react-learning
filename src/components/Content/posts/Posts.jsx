import React from "react";
import styles from "./Posts.module.css";
const Posts = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.PostsWrapper}>
        <div className="row align-content-center ">
          <textarea
            className="form-control"
            className={styles.textarea}
            aria-label="With textarea"
            value={props.posts.newPostContent}
            onChange={props.onPostInput}
          ></textarea>

          <div className="row align-content-center m-0">
            <div className="col">
              <button className="btn btn-primary" onClick={props.NewPost}>
                Добавить
              </button>
            </div>
          </div>
        </div>
        {props.PostsElements}
      </div>
    </div>
  );
};
export default Posts;
