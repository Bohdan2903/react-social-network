import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    // let state = props.store.getState();

  return (
      <StoreContext.Consumer>
          {
              (store) => {
                  let state = store.getState();
                  const addPost = () => {
                      store.dispatch(addPostActionCreator());
                  };

                  const onPostChange = (text) => {
                      let action = updatePostTextActionCreator(text);
                      store.dispatch(action);
                  };
                  return (
                          <MyPosts updateNewPostText={onPostChange}
                                   addPost = {addPost}
                                   posts={state.profilePage.posts}
                                   newPostText={state.profilePage.newPostText}
                          />
                      )

              }

          }

      </StoreContext.Consumer>
  )
};

export default MyPostsContainer;
