import React, {Component} from 'react'

class NewMemberForm extends Component {
  state = {
    // write attributes for each input field
    name: '',
    role: '',
    location: '',
    picture: '',
  }

  handleChange = (event) => {
    // update the state with the user's input
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    // insert event.preventDefault() to stop the page from refreshing upon submit
    // write a fetch POST request that creates a new team member and sends that data to the backend

    event.preventDefault()

    fetch('http://localhost:3000/team-members', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        role: this.state.role,
        location: this.state.location,
        picture: this.state.picture,
        stars: 0,
      }),
    })
      .then((response) => response.json())
      .then((newMember) => {
        this.props.createMemberMethod(newMember)
      })
  }

  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a new member to the SuperHi team</h2>

        <label>Name</label>
        <br />
        <input type="text" name="name" onChange={this.handleChange} />
        <br />

        <label>Role</label>
        <br />
        <input type="text" name="role" onChange={this.handleChange} />
        <br />

        <label>Location</label>
        <br />
        <input type="text" name="location" onChange={this.handleChange} />
        <br />

        <label>Picture URL</label>
        <br />
        <input type="text" name="picture" onChange={this.handleChange} />
        <br />

        <input type="submit" value="Add new member" />
      </form>
    )
  }
}

export default NewMemberForm
