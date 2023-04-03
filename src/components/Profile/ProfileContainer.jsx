import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component  {

    componentDidMount () {

        let userId = this.props.match.params.userId//берем id из url
        console.log(this.props)
        if(!userId){userId=this.props.authUserId
        if(!userId){this.props.history.push("/login")}
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)


    }
    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status = {this.props.status}
                         updateStatus = {this.props.updateStatus}
                />
            </div>
        )
    }
}



// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

const mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    authUserId:state.auth.userId,
    status: state.profilePage.status,
    isAuth:state.auth.isAuth
})



export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)