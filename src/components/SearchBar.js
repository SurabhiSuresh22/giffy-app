import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='searchBox'>
        <input type="text" placeholder='Add name or keyword...' />
        <button>Search</button>
    </div>
  )
}

export default SearchBar