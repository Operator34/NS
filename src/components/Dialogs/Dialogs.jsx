import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
const maxLength30 = maxLengthCreator(30)
const Dialogs = ({sendMessage, dialogsPage}) => {

    const addNewMessage = (values) => {
        sendMessage(values.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

export const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} validate={[required, maxLength30]} name={"newMessageBody"} placeholder="Enter your message" />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageFormRedux"})(AddMessageForm)



export default Dialogs