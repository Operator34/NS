import React from "react";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/default_avatar.png"

const Users = ({users, follow, unfollow, setUsers}) => {
const getUsers = () => {
    if(users.length === 0) {

        // setUsers([
        //     {
        //         id: 1,
        //         photoUrl: "https://sun9-74.userapi.com/impg/m3-XF1tXlDzdM5ed6Ec7Yyi0ZI4DOeC1MxnoBQ/o2rTzhAPJ_Q.jpg?size=97x130&quality=96&sign=47989d836d9804cf3b93f3d437c81a35&c_uniq_tag=YIbnu8VVORo8xxBCfM1u6aVpSot1oYGhKvvf1KhTcJ0&type=album",
        //         followed: false,
        //         name: "Dmitry",
        //         status: "I am a boss",
        //         location: {city: "Minsk", country: "Belarus"}
        //     },
        //     {
        //         id: 2, photoUrl: "https://i.pinimg.com/236x/b6/92/61/b69261604fafdc9ed58f8775b52c2671--health-prints.jpg",
        //         followed: true, name: "Inna", status: "I dont no", location: {city: "Moscow", country: "Russia"}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: "https://sun9-55.userapi.com/impf/c624117/v624117379/207f1/qyIrEorD_JY.jpg?size=320x480&quality=96&sign=b011419e32b8d2b45a2772aeff48fdc7&c_uniq_tag=zqi_GQcPVPGbpgIq1DqnrqPnsKCD8PVpyQwGnIywGss&type=album",
        //         followed: true,
        //         name: "Alex",
        //         status: "Hu is you?",
        //         location: {city: "Phuket", country: "Thailand"}
        //     },
        //     {
        //         id: 4,
        //         photoUrl: "https://sun9-55.userapi.com/impf/c624117/v624117379/207f1/qyIrEorD_JY.jpg?size=320x480&quality=96&sign=b011419e32b8d2b45a2772aeff48fdc7&c_uniq_tag=zqi_GQcPVPGbpgIq1DqnrqPnsKCD8PVpyQwGnIywGss&type=album",
        //         followed: false,
        //         name: "Vika",
        //         status: "Im like dogs",
        //         location: {city: "Piter", country: "Russia"}
        //     }
        // ])
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            setUsers(response.data.items)
        })
    }
}

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                unfollow(u.id)
                            }}>UNFOLLOW</button>
                            :
                            <button onClick={() => {
                                follow(u.id)
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