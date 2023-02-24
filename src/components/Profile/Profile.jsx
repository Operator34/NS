import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://webmg.ru/wp-content/uploads/2022/11/i-25-52-2048x1365.jpeg' alt='card'></img>
            </div>
            <div className={s.avatar}>
                <img src='https://cs6.pikabu.ru/avatars/1785/x1785044-1840373740.png' alt='avatar'/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile