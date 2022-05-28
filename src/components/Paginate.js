import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Paginate.css'

const Paginate = (props) => {

  // const pageNum = []
  // for(let i=1; i<= Math.ceil(props.totalItems/props.itemsPerpage);i++){
  //   pageNum.push(i)
  // }
  return (
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
  )
  // return (
  //   <div className='paginate'>
  //       <nav aria-label="...">
  //       <ul className="pagination">
  //           {pageNum.map( num =>{
  //             let classes = 'page-item'
  //             if(num == props.currPage){
  //               classes +=' active'
  //             }

  //             return (
  //               <li className={classes}>
  //                   <a onClick={()=>props.pageSelected(num)} className="page-link" href="#">{num}</a>
  //               </li>
  //             )
  //           })}
  //       </ul>
  //     </nav>
  //   </div>
  // )
}

export default Paginate