import React from 'react'
import './SearchBar.css'

const SearchBar = ({search,data, loading, handleSearch, handleSubmit}) => {
  return (
    <div className='searchBox'>
      <form >
        <input 
        value={search} 
        onChange={handleSearch} 
        type="text" 
        placeholder='Add name or keyword...' />

        <button 
        onClick={handleSubmit}
        type='submit'
        >Search</button>
      </form>

    </div>
  )
}

export default SearchBar