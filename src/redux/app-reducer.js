import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


//action creator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

const initialState = {
    initialized:false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state,
                initialized: true,
            }
        }

        default:
            return state
    }
}


//thunk
export const initializeApp = () => {
    return (dispatch) => {
       const propmise = dispatch(getAuthUserData())
        propmise.then(()=>{
            dispatch(initializedSuccess())
        })

    }
}

export default appReducer