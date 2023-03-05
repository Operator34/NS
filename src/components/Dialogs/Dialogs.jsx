import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator

} from "../../redux/state";

const newMessage = React.createRef()
const Dialogs = ({store, dispatch}) => {
const state = store.getState()
    console.log(state)
    const onSendMessageClick = () => {
    dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value
        console.log(body)
        dispatch(updateNewMessageBodyCreator(body))
    }

    const dialogElements = state.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesElements = state.dialogsPage.messages.map( m => <Message message={m.message} id={m.id} key={m.id}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter your message" ref={newMessage} onChange={onNewMessageChange} value={state.dialogsPage.newMessageBody}></textarea>
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