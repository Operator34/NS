import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";



const Users = (props) => {
        const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span key={p} className={props.currentPage === p ? s.selectedPage : s.page} onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                    })}
                </div>
                {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' +u.id}>
                            <img alt={"Avatar"} src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?

                            <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                props.unfollow(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // usersAPI.unfollow(u.id)
                                //     .then(data => {
                                //     if(data.resultCode===0) {
                                //         props.unfollow(u.id)
                                //     }
                                //     props.toggleFollowingProgress(false, u.id)
                                // })
                            }}>UNFOLLOW</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                props.follow(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // usersAPI.follow(u.id)
                                //     .then(data => {
                                //     if(data.resultCode===0) {
                                //         props.follow(u.id)
                                //     }
                                //     props.toggleFollowingProgress(false, u.id)
                                // })
                            }}>FOLLOW</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>
        )
    }

export default Users
