import React, {Component} from 'react'

class TeamMember extends Component {
  handleStars = (event) => {
    let {id, stars} = this.props.teamMember

    fetch(`http://localhost:3000/team-members/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        stars: stars + 1,
      }),
    })
      .then((r) => r.json())
      .then((member) => {
        this.props.updateMember(member)
      })
  }

  handleDelete = (event) => {
    let {id} = this.props.teamMember

    fetch(`http://localhost:3000/team-members/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => {
        this.props.deleteMember(id)
      })
  }

  render() {
    let {name, role, location, picture, stars} = this.props.teamMember

    return (
      <div className="card">
        <img src={picture} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{location}</p>
        <p>{stars} stars</p>

        <div className="btn-group">
          <button onClick={this.handleStars}>
            <span role="img" aria-label="star">
              ⭐️{' '}
            </span>
            Give a star
          </button>
          <button onClick={this.handleDelete}>
            <span role="img" aria-label="yellow-warning-sign">
              ⚠️{' '}
            </span>
            Remove
          </button>
        </div>
      </div>
    )
  }
}

export default TeamMember
