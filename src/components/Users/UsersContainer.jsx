import React from "react";
import {connect} from "react-redux";

import {
    follow, unfollow, setCurrentPage,  toggleFollowingProgress, getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsLoading(true)// когда делаем запрос на сервер
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then( data => {
        //     this.props.toggleIsLoading(false)//когда получаем ответ от сервера
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // }) перенесено в санку
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsLoading(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //     this.props.toggleIsLoading(false)
        //     this.props.setUsers(data.items)
        // }) перенесено в санку
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
                    followingInProgress={this.props.followingInProgress}
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
        isLoading:state.usersPage.isLoading,
        followingInProgress:state.usersPage.followingInProgress

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

// const withRedirect = withAuthRedirect(UsersContainer)
// export default connect(mapStateToProps,
//     {
//         setCurrentPage,
//         follow,
//         unfollow,
//         toggleFollowingProgress,
//         getUsers
//     }
// )(withRedirect)

export default compose (
    withAuthRedirect,
    connect(mapStateToProps,
    {
        setCurrentPage,
        follow,
        unfollow,
        toggleFollowingProgress,
        getUsers
    }
))(UsersContainer)