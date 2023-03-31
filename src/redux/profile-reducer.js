import {usersAPI, profileAPI} from "../api/api";
import {nanoid} from "nanoid";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET STATUS"

//action creator
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})

const initialState = {
    posts: [
        {id: 1, message: "Привет. Как твои дела", likesCount: 12},
        {id: 2, message: "Отлично", likesCount: 11},
        {id: 3, message: "Какие планы?", likesCount: 15},
        {id: 4, message: "Буду отдыхать", likesCount: 17},
        {id: 5, message: "Понятно", likesCount: 19},
    ],
    profile:null,
    status:""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: nanoid(),
                message: action.newPostText,
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

        case SET_USER_PROFILE:{
            return{
                ...state,
                profile:action.profile
            }
        }
        case SET_STATUS:{
            return{
                ...state,
                status:action.status
            }
        }
        default:
            return state
    }
    return state
}


//thunkCreator
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))

            })
    }
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
            .then(data => {

                dispatch(setStatus(data))
            })
    }
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer