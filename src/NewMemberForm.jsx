import React, { Component } from 'react';

class NewMemberForm extends Component {
  state = {  }

  render() { 
    return (
      <form>
        <h2>Add a new member to the SuperHi team</h2>

        <label>Name</label>
        <br />

        <input type="text" name="name" value={this.state.value} />
        <br />

        <label>Role</label>
        <br />

        <input type="text" name="role" value={this.state.value} />
        <br />

        <label>Location</label>
        <br />

        <input type="text" name="location" value={this.state.value} />
        <br />

        <label>Picture URL</label>
        <br />

        <input type="text" name="picture" value={this.state.value} />
        <br />

        <input type="submit" value="Add new member" />
      </form>
    )
  }
}
 
export default NewMemberForm