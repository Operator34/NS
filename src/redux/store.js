import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";


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
        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar=sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)

    }

}



export default store
window.store = store
