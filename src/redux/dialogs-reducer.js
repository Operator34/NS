const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

//action creator
export const updateNewMessageBodyCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: message})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

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
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ""
            break;
        default:
            return state
    }
    return state

}

export default dialogsReducer