import React from "react";
// import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div>
            My post
           <div>
               <textarea></textarea>
               <button>Add post</button>
           </div>
            <Post message = "Привет. Как твои дела?" likeCount={20}/>
            <Post message = "Отлично" likeCount={25}/>

        </div>
    )
}

export default MyPosts