import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import ReactPaginator from "../common/Paginator/ReactPaginator";
import ReactPaginator2 from "../common/Paginator/ReactPaginator2";

const Users = ({
                   currentPage,
                   onPageChanged,
                   totalUsersCount,
                   pageSize,
                   users,
                   followingInProgress,
                   unfollow,
                   follow,
                   ...props
               }) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <ReactPaginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <ReactPaginator2
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />

            {users.map(u =>
                <User user={u}
                      key={u.id}
                      followingInProgress={followingInProgress}
                      follow={follow}
                      unfollow={unfollow}
                />)}

        </div>
    )
}
export default Users
