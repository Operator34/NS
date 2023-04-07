import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import searchJob from "../../../assets/images/searchJob.png"
import noSearchJob from "../../../assets/images/noSearchJob.png"
import userPhoto from "../../../assets/images/default_avatar.png";

import IconsNetWork from "./SocialNetwork/IconsNetWork";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {


if(!profile){
    return <Preloader/>
}
    return (
        <div >
            <div className={s.descriptionCard}>
                <img alt={"avatar"} className={s.avatar} src={profile.photos.large ? profile.photos.large : userPhoto}/>
                <div className={s.descriptionInfo}>
                    <span className={s.fullName}>{profile.fullName}</span>
                    <ProfileStatusWithHooks
                        status = {status}
                        updateStatus = {updateStatus}
                    />
                    <span className={s.aboutMe}>{`Обо мне: ${profile.aboutMe}`}</span>
                    <img alt={"job"} className={s.statusJob} src={ profile.lookingForAJob ? searchJob : noSearchJob}/>
                    <IconsNetWork link={profile.contacts.twitter}
                                  contacts={profile.contacts}/>
                </div>
            </div>
        </div>


    )
}

export default ProfileInfo