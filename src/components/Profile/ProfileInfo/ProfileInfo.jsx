import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.card}>
                <img src='https://webmg.ru/wp-content/uploads/2022/11/i-25-52-2048x1365.jpeg' alt='card'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>


    )
}

export default ProfileInfo