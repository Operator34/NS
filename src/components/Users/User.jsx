import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


const User = ({user, followingInProgress,unfollow ,follow, ...props}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt={"Avatar"} src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>UNFOLLOW</button>
                            :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>FOLLOW</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            )}
        </div>
    )
}

export default User
