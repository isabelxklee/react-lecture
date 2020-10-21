import React, { Component } from 'react'

class TeamMember extends Component {
  state = {  }

  render() { 
    let {name, role, location, picture} = this.props.teamMember

    return (
      <div className="card">
        <img src={picture} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{location}</p>

        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}
 
export default TeamMember