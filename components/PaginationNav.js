import Pagination from "react-js-pagination"
import { useState } from "react"
import styles from './PaginationNav.module.css'
const PaginationNav = ({data, activePage, handlePageChange}) => {
 return (
    <div>
        <Pagination 
            activePage={activePage}
            itemsCountPerPage={data.limit}
            totalItemsCount={data.totalDocs}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            innerClass={styles.paginationUl}
            itemClass={styles.paginationLi}
            linkClass={styles.paginationA}
            activeLinkClass={styles.paginationAActive}
        />
    </div>
  )
}

export default PaginationNav