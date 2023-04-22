import React, {useState} from "react";
import s from "./Paginator.module.css";



const Paginator = ({totalItemsCount,pageSize = 5,currentPage,onPageChanged, portionSize = 10 }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber-1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
                <button onClick={()=> setPortionNumber(portionNumber-1)}>LAST</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map((p) => {
                return <span className = {({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber)}
                             key={p}
                             onClick={() => {onPageChanged(p)}}>
                    {p}
                </span>
            })}

            {portionCount > portionNumber &&
                <button onClick={()=> setPortionNumber(portionNumber+1)}>NEXT</button>}
        </div>
    )
}

export default Paginator
