import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer"
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({

    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
//const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window._store_=store

export default store