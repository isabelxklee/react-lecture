import React, { Component } from "react";

class NewMemberForm extends Component {
  state = {
    name: "",
    role: "",
    location: "",
    picture: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/team-members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        role: this.state.role,
        location: this.state.location,
        picture: this.state.picture,
        stars: 0,
      }),
    })
      .then((r) => r.json())
      .then((newMember) => {
        this.props.addNewMember(newMember);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a new member to the SuperHi team</h2>

        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />

        <label>Role</label>
        <br />
        <input
          type="text"
          name="role"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />

        <label>Location</label>
        <br />
        <input
          type="text"
          name="location"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />

        <label>Picture URL</label>
        <br />
        <input
          type="text"
          name="picture"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />

        <input type="submit" value="Add new member" />
      </form>
    );
  }
}

export default NewMemberForm;
