import {usersAPI, profileAPI} from "../api/api";
import {nanoid} from "nanoid";

const ADD_POST = "NS/auth/ADD-POST";
const SET_USER_PROFILE = "NS/auth/SET_USER_PROFILE";
const SET_STATUS = "NS/auth/SET STATUS"
const DELETE_POST = "NS/auth/DELETE_POST"

//action creator
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const deletePost = (postId) => ({type:DELETE_POST, postId})

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

        }
        case DELETE_POST:{
            return {
                ...state,
                posts:state.posts.filter(p=>p.id !== action.postId)
            }
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
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer