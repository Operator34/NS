import React from "react";
import Friends from "./Friends";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

// const FriendsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//             const state = store.getState()
//             return (
//                 <Friends userFriends={state.sideBar.userFriends}/>
//             )
//         }}
//         < /StoreContext.Consumer>
//
//     )
//
// }

const mapStateToProps = (state) => {
    return{
        userFriends: state.sideBar.userFriends
    }

}

const FriendsContainer = connect(mapStateToProps)(Friends)
export default FriendsContainer