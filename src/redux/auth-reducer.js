import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_LOADING ="TOGGLE_IS_LOADING"

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state,
                ...action.payload,

            }
        }
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

//action creator
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:{userId, email, login, isAuth}})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})

//thunk
export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true))
        return authAPI.me()
            .then(data => {
                dispatch(toggleIsLoading(false))
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {


        dispatch(toggleIsLoading(true))
    authAPI.login(email, password, rememberMe)
            .then(data => {
                dispatch(toggleIsLoading(false))
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }else{
                    const message = data.messages.length > 0 ? data.messages[0]: "Some Error"
                    dispatch(stopSubmit("login",{_error:message}))
                }
            })
}

export const logout = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    authAPI.logout()
        .then(data => {
            dispatch(toggleIsLoading(false))
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer