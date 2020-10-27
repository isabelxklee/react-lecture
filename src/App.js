import React, { Component } from 'react'
import './App.css'
import TeamContainer from './TeamContainer.jsx'
import NewMemberForm from './NewMemberForm.jsx'

class App extends Component {
  state = {
    teamMembers: []
  }

  componentDidMount() {
    // write a GET fetch request to pull in all the data about the team members from the backend
    fetch("http://localhost:3000/team-members")
    .then(response => response.json())
    .then((array) => {
      this.setState({
        teamMembers: array
      })
    })
  }

  exampleFunction = () => {
    return "hello, world!"
  }

  addNewMember = (newMember) => {
    // update the state to add the new team member
  }

  updateMember = (updatedMember) => {
    // update the state with the updated team member's information
  }

  deleteMember = (deletedId) => {
    // update the state to remove the team member
  }

  render() {
    return (
      <div>
        <h1>SuperHi Team Directory</h1>
        <p>Here are all the wonderful members of SuperHi!</p>
        <TeamContainer teamMembersArray={this.state.teamMembers} exampleFunction={this.exampleFunction} />
        <NewMemberForm />
      </div>
    )
  }
}
 
export default App