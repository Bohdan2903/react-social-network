import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Posts";

const MyPosts = (props) => {

  const postElement = props.posts.map(item => {
    return(
      <Post key={item.id} message={item.message} likeCount={item.likeCount}/>
    )
  });

  const newTextPost = React.createRef();


  const onAddPost = () => {
      props.addPostAction();
  };
  const onPostChange = () => {
      let text = newTextPost.current.value;
      props.updatePostTextAction(text);
    }


  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div><textarea onChange={onPostChange} value={props.newPostText} ref={newTextPost}/></div>
        <div>
            <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  )
};

export default MyPosts;
