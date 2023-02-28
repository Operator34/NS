import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = ({name, id}) =>{
    const path = `/dialogs/${id}`
    return(
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar} src="https://cs13.pikabu.ru/avatars/3087/x3087079-1757670128.png"/>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem