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

  render() { 
    return (
      <div>
        <h1>SuperHi Team Directory</h1>
        <p>Here are all the wonderful members of SuperHi!</p>
        <TeamContainer teamMembers={this.state.teamMembers}/>
        <NewMemberForm />
      </div>
    )
  }
}
 
export default App