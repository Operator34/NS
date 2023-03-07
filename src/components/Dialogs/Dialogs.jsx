import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const newMessage = React.createRef()

const Dialogs = ({updateNewMessageBody, sendMessage, dialogsPage}) => {

    const onSendMessageClick = () => {
        sendMessage()
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value
        console.log(body)
        updateNewMessageBody(body)
    }

    const dialogElements = dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesElements = dialogsPage.messages.map( m => <Message message={m.message} id={m.id} key={m.id}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter your message" ref={newMessage} onChange={onNewMessageChange} value={dialogsPage.newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs