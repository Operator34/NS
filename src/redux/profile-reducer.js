const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

//action creator
export const addPostCreator = () => ({type: ADD_POST})

export const updateNewPostTextCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText:text
    }
}
const initialState = {
    posts: [
        {id: 1, message: "Привет. Как твои дела", likesCount: 12},
        {id: 2, message: "Отлично", likesCount: 11},
        {id: 3, message: "Какие планы?", likesCount: 15},
        {id: 4, message: "Буду отдыхать", likesCount: 17},
        {id: 5, message: "Понятно", likesCount: 19},
    ],
    newPostText: "Введите новый пост"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, newPost]
            }
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost)
            // stateCopy.newPostText = ""

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText
            }
            // stateCopy.newPostText = action.newText
        }
        default:
            return state
    }
    return state
}
export default profileReducer