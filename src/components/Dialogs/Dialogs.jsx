import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogs, messages}) => {


const dialogElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
const messagesElements = messages.map( m => <Message message={m.message} id={m.id} key={m.id}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs