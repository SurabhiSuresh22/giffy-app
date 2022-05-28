import React from 'react'
import ReactPaginate from 'react-paginate'
import './Paginate.css'

const Paginate = (props) => {

  return (
    <div className="paginate">
    <ReactPaginate 
    previousLabel={'Previous'}
    nextLabel={'Next'}
    pageCount={props.pageCount}
    onPageChange={props.changePage}
    containerClassName={'paginationBttns'}
    previousLinkClassName={'previousBttn'}
    nextLinkClassName={'nextBttn'}
    disabledClassName={'paginationDisabled'}
    activeClassName={'paginationActive'}
    />
    </div>
  )
}

export default Paginate