import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Posts";

const MyPosts = (props) => {


  const postElement = props.posts.map(item => {
    return(
      <Post key={item.id} message={item.message} likeCount={item.likeCount}/>
    )
  });

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add Post</button></div>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  )
};

export default MyPosts;
