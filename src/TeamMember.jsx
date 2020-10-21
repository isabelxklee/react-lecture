import React, { Component } from 'react'

class TeamMember extends Component {
  state = {  }

  render() { 
    return (
      <div>
        <p>{this.props.teamMember.name}</p>
      </div>
    )
  }
}
 
export default TeamMember