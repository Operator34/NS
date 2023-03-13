import s from "./Friends.module.css"
import FriendItem from "./Friend/FriendItem";

const Friends = ({userFriends}) => {
    const userFriend = userFriends.map( u => <FriendItem name={u.name} key={u.id}/> )
    return(
        <div className={s.container}>
            <h3>Friends</h3>
            <div className={s.userFriend}>
                {userFriend}
            </div>
        </div>
    )

}
export default Friends