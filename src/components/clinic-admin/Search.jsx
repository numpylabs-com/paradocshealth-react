import React from 'react'

const Search = () => {
  return (
    <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="search-field"
          placeholder="Search Here..."
        />
      </div>
  )
}

export default Search