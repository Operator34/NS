import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator

} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({store}) => {

    const state = store.getState()
    console.log(state)
    const onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body) => {
        console.log(body)
        store.dispatch(updateNewMessageBodyCreator(body))
    }

    return(
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
            dialogsPage={state.dialogsPage}
        />
    )
}

export default DialogsContainer