const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Привет. Как твои дела", likesCount: 12},
                {id: 2, message: "Отлично", likesCount: 11},
                {id: 3, message: "Какие планы?", likesCount: 15},
                {id: 4, message: "Буду отдыхать", likesCount: 17},
                {id: 5, message: "Понятно", likesCount: 19},
            ],
            newPostText: "Введите новый пост"
        },
        dialogsPage: {
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

        },
        sideBar: {
            userFriends: [
                {id: 1, name: "Dimich"},
                {id: 2, name: "Max"},
                {id: 3, name: "Vitya"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Valera"},
                {id: 6, name: "Nick"},

            ]
        },
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState(){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber = observer
    },

    dispatch(action){
        if(action.type === ADD_POST){
            const newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText=""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT){
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }else if (action.type === SEND_MESSAGE){
            const newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ""
            this._callSubscriber(this._state)
        }
    }

}
//action creator
export const addPostCreator = () => ({type: ADD_POST})

export const updateNewPostTextCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText:text
    }
}
export const updateNewMessageBodyCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: message})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default store
window.store = store
