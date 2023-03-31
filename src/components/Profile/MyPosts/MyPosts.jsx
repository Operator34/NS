import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


//const newPostElement = React.createRef() //создаем ссылку, привязываем ссылку к textarea
const maxLength10 = maxLengthCreator(10)
const MyPosts = ( {posts, addPost}  ) => {
    const postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount} key={p.id}/>)

    const onAddPost = (values) => {
        addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
           <AddNewPostFormRedux onSubmit ={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength10]} name={"newPostText"}  placeholder={"Введите новый пост"} />
            </div>
            <div>
                <button>Добавить пост</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts