import React from "react";
import s from "./Paginator.module.css";



const Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? s.selectedPage : s.page} onClick={() => {
                    onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator
