import React from "react";
import { addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = ( {store} ) => {
    const state = store.getState()

    const addPost = () => {
       store.dispatch(addPostCreator())
    }
    const onPostChange = (text) => {
        console.log(text)
        store.dispatch(updateNewPostTextCreator(text))
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        /> )
}

export default MyPostsContainer