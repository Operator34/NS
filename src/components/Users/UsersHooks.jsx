import React from "react";
import {connect} from "react-redux";

import {
    follow, unfollow, setCurrentPage,  toggleFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUserCount
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

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
        users:getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage:getCurrentPage(state),
        isLoading:getIsLoading(state),
        followingInProgress:getFollowingInProgress(state)

    }
}

export default compose (
    //withAuthRedirect,
    connect(mapStateToProps,
    {
        setCurrentPage,
        follow,
        unfollow,
        toggleFollowingProgress,
        getUsers: requestUsers
    }
))(UsersContainer)