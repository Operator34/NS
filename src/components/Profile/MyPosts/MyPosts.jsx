import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = ( {posts} ) => {
    const postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount} key={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
           <div>
               <div>
                   <textarea></textarea>
               </div>
               <div>
                    <button>Add post</button>
               </div>
           </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts