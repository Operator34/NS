import {nanoid} from "nanoid";

const SEND_MESSAGE = "NS/auth/SEND_MESSAGE"

//action creator

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

const initialState = {
    messages: [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как твои дела?"},
        {id: 3, message: "Отлично"}
    ],
    dialogs: [
        {id: 1, name: "Димыч"},
        {id: 2, name: "Макс"},
        {id: 3, name: "Витя"},
        {id: 4, name: "Саша"},
        {id: 5, name: "Валера"},
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
            case SEND_MESSAGE:
            const newMessage = {
                id: nanoid(),
                message: action.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }

        default:
            return state
    }
    return state

}

export default dialogsReducer