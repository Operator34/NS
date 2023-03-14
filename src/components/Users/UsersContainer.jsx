import React from "react";
import {connect} from "react-redux";
import  axios from "axios";

import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading
} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../../assets/images/Loader.svg"
import Preloader from "../common/Preloader/Preloader";
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsLoading(true)// когда делаем запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsLoading(false)//когда получаем ответ от сервера
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsLoading(false)
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isLoading:state.usersPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         toggleIsLoading: (isLoading) => {
//             dispatch(toogleIsLoadingAC(isLoading))
//         }
//
//     }
// }
//это делает connect под капотом


export default connect(mapStateToProps,
    {
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        follow,
        unfollow,
        toggleIsLoading
    }
)(UsersContainer)