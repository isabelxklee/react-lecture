import React from 'react'

const Search = (props) => {
  const handleChange = (event) => {
    props.changeSearchTerm(event.target.value)
  }

  return (
    <div id="search">
      <label>Filter by location</label>
      <br />
      <input
        type="text"
        name="search"
        placeholder="Enter a location"
        value={props.searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
