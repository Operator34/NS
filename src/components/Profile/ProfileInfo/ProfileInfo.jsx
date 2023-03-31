import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import searchJob from "../../../assets/images/searchJob.png"
import noSearchJob from "../../../assets/images/noSearchJob.png"
import ProfileStatus from "./ProfileStatus"

import IconsNetWork from "./SocialNetwork/IconsNetWork";

const ProfileInfo = (props) => {


if(!props.profile){
    return <Preloader/>
}
    return (
        <div >
            {/*<div className={s.card}>*/}
            {/*    <img src='https://webmg.ru/wp-content/uploads/2022/11/i-25-52-2048x1365.jpeg' alt='card'></img>*/}
            {/*</div>*/}

            <div className={s.descriptionCard}>
                <img alt={"avatar"} className={s.avatar} src={props.profile.photos.large}/>
                <div className={s.descriptionInfo}>
                    <span className={s.fullName}>{props.profile.fullName}</span>
                    <ProfileStatus
                        status = {props.status}
                        updateStatus = {props.updateStatus}
                    />
                    <span className={s.aboutMe}>{`Обо мне: ${props.profile.aboutMe}`}</span>
                    <img alt={"job"} className={s.statusJob} src={ props.profile.lookingForAJob ? searchJob : noSearchJob}/>
                    <IconsNetWork link={props.profile.contacts.twitter}
                                  contacts={props.profile.contacts}/>
                </div>
            </div>
        </div>


    )
}

export default ProfileInfo