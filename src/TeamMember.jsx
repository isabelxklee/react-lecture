import React, { Component } from 'react'

class TeamMember extends Component {
  state = {
    displayForm: false
  }

  handleClick = (event) => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  render() {
    console.log(this.state.displayForm)
    let {name, role, location, picture} = this.props.teamMember

    return (
      <div className="card">
        <img src={picture} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{location}</p>

        <button onClick={this.handleClick}><span role="img" aria-label="star">⭐️ </span>Give a star</button>
        <button><span role="img" aria-label="yellow-warning-sign">⚠️ </span>Remove</button>
      </div>
    )
  }
}
 
export default TeamMember