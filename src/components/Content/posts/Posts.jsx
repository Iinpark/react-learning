import React from "react";
import Post from "./post";
import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.PostsWrapper}>
        <div className="row align-content-center">
          <textarea
            className="form-control"
            className={styles.textarea}
            aria-label="With textarea"
          ></textarea>
            <div className="row align-content-center m-0">
          <div className="col">
            <button className="btn btn-primary" onClick={}>Добавить</button>
          </div>
            </div>
        </div>

        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
      </div>
    </div>
  );
};

export default Posts;
