import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search Item</label>
        <input 
        id="search"
        role="searchbox"
        type="text"
        placeholder='Search Items'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}p />
    </form>
  )
}

export default SearchItem
