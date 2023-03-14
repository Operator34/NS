const FALLOW = "FALLOW";
const UNFALLOW = "UNFALLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT ="SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_LOADING ="TOGGLE_IS_LOADING"

//action creator
export const follow = (userId) => ({type: FALLOW, userId})
export const unfollow = (userId) => ({type: UNFALLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type : SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type : SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsLoading = (isLoading) => ({type:"TOGGLE_IS_LOADING", isLoading})

const initialState = {
    users: [],
    pageSize:10,
    totalUsersCount: 0,
    currentPage:1,
    isLoading: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:{
            // const newUsers = action.users.filter(u => !state.users.some(user => user.id === u.id));
            // return {...state, users: [...state.users, ...newUsers]}
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: [...action.users]}
        }

        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.count}
        }

        case FALLOW: {
            return {
                ...state,
                //users: [...state.users] или users: state.users.map( u => u) одно и тоже
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case UNFALLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case TOGGLE_IS_LOADING:{
            return{
                ...state,
                isLoading: action.isLoading
            }
        }

        default:
            return state
    }
}
export default usersReducer