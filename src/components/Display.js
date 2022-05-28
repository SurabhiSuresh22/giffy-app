import React from 'react'
import './Display.css'
import Loader from './Loader'

const Display = ({data, loading, currPage, itemsPerpage,currItems}) => {
  const renderGif  = () =>{
    if(loading){
      return <div className="loader"><Loader/></div>
    }
    return currItems.map(e =>{
      return (
        <div key={e.id} className="gif">
           <img src={e.images.fixed_height.url} alt="" /> 
        </div>
      )
    })
  }

  return (
    <div className='giphy-container'>
      {renderGif()}
    </div>
  )
}

export default Display