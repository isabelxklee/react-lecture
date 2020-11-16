import React, {Component} from 'react'
import './App.css'
import Search from './Search.jsx'
import TeamContainer from './TeamContainer.jsx'
import NewMemberForm from './NewMemberForm.jsx'

class App extends Component {
  state = {
    teamMembers: [],
    searchTerm: '',
  }

  componentDidMount() {
    fetch('http://localhost:3000/team-members')
      .then(response => response.json())
      .then((newTeamMembers) => {
        this.setState({
          teamMembers: newTeamMembers,
        })
      })
  }

  addNewMember = (newMember) => {
    this.setState({
      teamMembers: [...this.state.teamMembers, newMember],
    })
  }

  updateMember = (updatedMember) => {
    const newArray = this.state.teamMembers.map((member) => {
      if (member.id === updatedMember.id) {
        return updatedMember
      } else {
        return member
      }
    })

    this.setState({
      teamMembers: newArray,
    })
  }

  deleteMember = (deletedId) => {
    const newArray = this.state.teamMembers.filter((member) => {
      return member.id !== deletedId
    })

    this.setState({
      teamMembers: newArray,
    })
  }

  handleSearchTerm = (inputFromChild) => {
    this.setState({
      searchTerm: inputFromChild,
    })
  }

  filterMembers = () => {
    let {searchTerm, teamMembers} = this.state
    let newArray = []

    if (searchTerm === '') {
      newArray = teamMembers
    } else {
      newArray = teamMembers.filter((member) =>
        member.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return newArray
  }

  render() {
    return (
      <div>
        <h1>SuperHi Team Directory</h1>
        <p>Here are all the wonderful members of SuperHi!</p>
        <Search
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
        <TeamContainer
          teamMembers={this.filterMembers()}
          updateMember={this.updateMember}
          deleteMember={this.deleteMember}
        />
        <NewMemberForm
          addNewMember={this.addNewMember}
        />
      </div>
    )
  }
}

export default App