import React, { Component } from 'react';

class NewMemberForm extends Component {
  state = {
    // write attributes for each input field
  }

  handleChange = (event) => {
    // update the state with the user's input
  }
  
  handleSubmit = (event) => {
    // insert event.preventDefault() to stop the page from refreshing upon submit
    // write a fetch POST request that creates a new team member and sends that data to the backend
  }

  render() {
    return (
      <form>
        <h2>Add a new member to the SuperHi team</h2>

        <label>Name</label>
        <br />
        <input type="text" name="name" />
        <br />

        <label>Role</label>
        <br />
        <input type="text" name="role" />
        <br />

        <label>Location</label>
        <br />
        <input type="text" name="location" />
        <br />

        <label>Picture URL</label>
        <br />
        <input type="text" name="picture" />
        <br />

        <input type="submit" value="Add new member" />
      </form>
    )
  }
}
 
export default NewMemberForm