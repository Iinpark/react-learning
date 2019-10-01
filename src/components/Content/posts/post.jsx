import React from "react";
import classes from "./post.module.css";

const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <img
          src="https://www.capitalbuyback.com/img/customers.png"
          alt="Nikola Tesla"
          className={classes.profile}
        />

        <a
          className={classes.autor}
          href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0"
        >
          Nikola Tesla
        </a>
      </div>
      <div className={classes.PostContent}>
        Эта статья показывает, как работает эта сравнительно новая технология,
        именно работает, а не только описание свойств с поверхностными
        примерами.Эта статья показывает, как работает эта сравнительно новая
        технология, именно работает, а не только описание свойств с
        поверхностными примерами. Эта статья показывает, как работает эта
        сравнительно новая технология, именно работает, а не только описание
        свойств с поверхностными примерами.
      </div>
      <div className={classes.feedback}>
        <div className={classes.likeBtn}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
            </g>
          </svg>
        </div>
        <span>12</span>
        <div className={classes.commentBtn}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </g>
          </svg>
        </div>
        <span>4</span>
      </div>
    </div>
  );
};
export default Post;
