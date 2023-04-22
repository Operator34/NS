import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

// const ReactPaginator = ({totalItemsCount,pageSize = 5,currentPage,onPageChanged, portionSize = 10 }) => {

const PaginatedItems = ({totalItemsCount, pageSize = 5}) => {

    // const [currentItems, setCurrentItems] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // const [itemOffset, setItemOffset] = useState(0);

    const pages = []
    const pagesCounter = Math.ceil(totalItemsCount / pageSize)
    for (let i = 1; i <= pagesCounter; i++) {
        pages.push(i)
    }
    useEffect(() => {

        // const endOffset = itemOffset + pageSize;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // setCurrentItems(pages.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(totalItemsCount / pageSize));
    }, []);

    const handlePageClick = (event) => {
        console.log(event.selected)

        // const newOffset = (event.selected * pageSize) % pages.length;
        //
        // setItemOffset(newOffset);
    };

    return (
        <>
                <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                containerClassName="pagination justify-content-center pagination-sm m-2"
                activeClassName="active"
                breakClassName="page-item"
                breakLinkClassName="page-link"
            />
        </>
    )

}

export default PaginatedItems
