import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src="https://html5css.ru/w3css/img_avatar3.png" alt="img" />
      {props.message}
      <div> {props.likeCount} like</div>
    </div>
  );
};

export default Posts;
