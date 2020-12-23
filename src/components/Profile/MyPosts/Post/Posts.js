import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
        <div className={s.itemHeader}>
            <img src="https://html5css.ru/w3css/img_avatar3.png" alt="img" />
            Ivan Ivanov
        </div>
        <div className={s.itemBody}>
            {props.message}
        </div>
      <div> {props.likeCount} like</div>
    </div>
  );
};

export default Posts;
