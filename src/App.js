import React, { Component } from 'react'
import './App.css'
// import TeamContainer from './TeamContainer.jsx'
// import NewMemberForm from './NewMemberForm.jsx'

class App extends Component {
  state = {
    // write a new attribute to store all the team members
  }

  componentDidMount() {
    // write a GET fetch request to pull in all the data about the team members from the backend
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
        <h1>{/* page title goes here */}</h1>
        <p>{/* description goes here */}</p>
      </div>
    )
  }
}
 
export default App