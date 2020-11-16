import React from 'react'

// const handleChange = ({props, event}) => {
//   props.handleSearchTerm(event.target.value)
// }

// const Search = ({searchTerm, handleSearchTerm}) => (
//   <div id="search">
//     <label>Filter by location</label>
//     <br />
//     <input
//       type="text"
//       name="search"
//       placeholder="Enter a location"
//       value={searchTerm}
//       onChange={handleChange}
//     />
//   </div>
// )

const Search = (props) => {
  let handleChange = (event) => {
    props.handleSearchTerm(event.target.value)
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
