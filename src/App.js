import React, {Component} from 'react'
import './App.css'
import TeamContainer from './TeamContainer.jsx'
import NewMemberForm from './NewMemberForm.jsx'

class App extends Component {
  state = {
    teamMembers: [],
  }

  componentDidMount() {
    // write a GET fetch request to pull in all the data about the team members from the backend
    fetch('http://localhost:3000/team-members')
      .then((response) => response.json())
      .then((array) => {
        this.setState({
          teamMembers: array,
        })
      })
  }

  exampleFunction = () => {
    return 'hello, world!'
  }

  addNewMember = (newMember) => {
    // update the state to add the new team member
    this.setState({
      teamMembers: [...this.state.teamMembers, newMember]
    })
  }

  updateTeamMemberData = (updatedMember) => {
    // update the state with the updated team member's information
    // map through the existing array of team members
    // check to see if the passed in instance already exists
    // if it exists, replace the old instance with the new data
    // if not, return the current instance
    // save the new array from the map loop to a new variable
    // using setState, update the local state's array with the new variable

    const newArray = this.state.teamMembers.map((member) => {
      if (member.id === updatedMember.id) {
        return updatedMember
      } else {
        return member
      }
    })

    this.setState({
      teamMembers: newArray
    })

    console.log(this.state.teamMembers)
  }

  deleteMember = (deletedId) => {
    // update the state to remove the team member
  }

  render() {
    return (
      <div>
        <h1>SuperHi Team Directory</h1>
        <p>Here are all the wonderful members of SuperHi!</p>
        <TeamContainer
          teamMembersArray={this.state.teamMembers}
          exampleFunction={this.exampleFunction}
          updateTeamMemberData={this.updateTeamMemberData} 
        />
        <NewMemberForm createMemberMethod={this.addNewMember} />
      </div>
    )
  }
}

export default App
