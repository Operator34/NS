import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helper";

const FALLOW = "NS/auth/FALLOW";
const UNFALLOW = "NS/auth/UNFALLOW";
const SET_USERS = "NS/auth/SET_USERS";
const SET_CURRENT_PAGE = "NS/auth/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "NS/auth/SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_LOADING = "NS/auth/TOGGLE_IS_LOADING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "NS/auth/TOGGLE_IS_FOLLOWING_PROGRESS"


const initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case FALLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        }

        case UNFALLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        }
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

//action creator
export const followSuccess = (userId) => ({type: FALLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFALLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})

//thunkCreator
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    dispatch(setCurrentPage(page))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsLoading(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

}
export const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator  ) => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(userId)
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(userId)
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
}

export default usersReducer