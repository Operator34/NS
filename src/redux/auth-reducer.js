import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "NS/auth/SET_USER_DATA"
const TOGGLE_IS_LOADING ="NS/auth/TOGGLE_IS_LOADING"

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
export const getAuthUserData = () => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    const response = await authAPI.me()
    dispatch(toggleIsLoading(false))
    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    const response = await authAPI.login(email, password, rememberMe)
    dispatch(toggleIsLoading(false))
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : "Some Error"
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const logout = () => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    const response = await authAPI.logout()
    dispatch(toggleIsLoading(false))
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer