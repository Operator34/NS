import React from "react";
import s from './Post.module.css'
const Post = () => {
    return (
            <div >
                <div className={s.item}>
                    <img src='https://cs14.pikabu.ru/avatars/100/x100707-1524323641.png' alt='avatar'/>
                    post
                    <div>
                        <span>like</span>
                    </div>

                </div>
            </div>

    )
}

export default Post