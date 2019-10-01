import React from "react";
import classes from "./PageInfo.module.css";

const PageInfo = () => {
  return (
    <div className={classes.PageInfo}>
      <div className={classes.PageTop}>
        <span>UserName</span>
        <span>Статус</span>
      </div>
      <div className={classes.PageBio}>
        <div className={classes.BirdthDate}>
          <span>День Рождения</span>
          <span>10 февраля 1999г.</span>
        </div>
        <div className={classes.BirdthCity}>
          <span>Город</span>
          <span>Алматы</span>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
