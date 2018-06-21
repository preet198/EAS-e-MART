import React, { Component } from "react";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(evt) {
    const name = evt.target.getAttribute('name');
    const value = evt.target.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('/register', {

      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      },
      /* Necessary to pass the session cookie along with the request */
      credentials: "same-origin"

    })
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        this.props.onUserLoggedIn(json)
      })
  }

  render() {
    return (
      <div className="Register">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <h2>Register</h2>
          <p>Username <input type="text" name="username" value={this.state.username} /></p>
          <p>Password <input type="text" name="password" value={this.state.password} /></p>
          <p>Username <input type="text" name="username" value={this.state.username} /></p>
          <p>Password <input type="text" name="password" value={this.state.password} /></p>
          <p>Username <input type="text" name="username" value={this.state.username} /></p>
          <p>Password <input type="text" name="password" value={this.state.password} /></p>
          <p><input type="submit" value="submit" /></p>
        </form>
      </div>
    );
  }
}

export default Register;
