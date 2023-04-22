import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

const PaginatedItems = ({totalItemsCount, pageSize = 5, onPageChanged}) => {
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        setPageCount(Math.ceil(totalItemsCount / pageSize));
    }, []);

    const handlePageClick = (event) => {
        onPageChanged(event.selected + 1)
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
