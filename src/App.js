import React, { Component } from 'react';
import './App.css'
import TeamContainer from './TeamContainer.jsx'
import NewMemberForm from './NewMemberForm.jsx'

class App extends Component {
  state = {
    teamMembers: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/team-members")
    .then(r => r.json())
    .then((newTeamMembers) => {
      this.setState({
        teamMembers: newTeamMembers
      })
    })
  }

  addNewMember = (newMember) => {
    this.setState({
      teamMembers: [...this.state.teamMembers, newMember]
    })
  }

  updateMember = (updatedMember) => {
    let newArray = this.state.teamMembers.map((member) => {
      if (member.id === updatedMember.id) {
        return updatedMember
      } else {
        return member
      }
    })

    this.setState({
      teamMembers: newArray
    })
  }

  deleteMember = (deletedId) => {
    let newArray = this.state.teamMembers.filter((member) => {
      return member.id !== deletedId
    })
    this.setState({
      teamMembers: newArray
    })
  }

  render() {
    return (
      <div>
        <h1>SuperHi Team Directory</h1>
        <p>Here are all the wonderful members of SuperHi!</p>
        <TeamContainer teamMembers={this.state.teamMembers} updateMember={this.updateMember} deleteMember={this.deleteMember}/>
        <NewMemberForm addNewMember={this.addNewMember} />
      </div>
    )
  }
}
 
export default App