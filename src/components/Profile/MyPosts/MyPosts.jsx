import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const newPostElement = React.createRef() //создаем ссылку, привязываем ссылку к textarea
const MyPosts = ( {posts, newPostText, dispatch, updateNewPostText, addPost}  ) => {

    const postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount} key={p.id}/>)

    const onAddPost = () => {
       // dispatch(addPostCreator())
        addPost()

    }
    const onPostChange = () => {
        const text = newPostElement.current.value
        // dispatch(updateNewPostTextCreator(text))
        updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
           <div>
               <div>
                   <textarea value={newPostText} ref={newPostElement} onChange={onPostChange} />
               </div>
               <div>
                    <button onClick={onAddPost}>Add post</button>
               </div>
           </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts