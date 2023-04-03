import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                authUserId={props.authUserId}
                status={props.status}
                updateStatus={props.updateStatus}
                isAuth={props.isAuth}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile