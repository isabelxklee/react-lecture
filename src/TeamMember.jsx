import React, { Component } from 'react'

class TeamMember extends Component {
  handleStars = (event) => {
    // write a fetch PATCH request that updates the number of stars for a specific team member
  }

  handleDelete = (event) => {
    // write a fetch DELETE request that deletes a team member from the backend
  }

  render() {
    // destructure props here

    return (
      <div className="card">
        <img src={""} alt={""} />
        <h3>{""}</h3>
        <p>{""}</p>
        <p>{""}</p>
        <p>{""} stars</p>

        <div className="btn-group">
          <button><span role="img" aria-label="star">⭐️ </span>Give a star</button>
          <button><span role="img" aria-label="yellow-warning-sign">⚠️ </span>Remove</button>
        </div>
      </div>
    )
  }
}
 
export default TeamMember