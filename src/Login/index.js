import React, { Component } from "react";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
      /* Necessary to pass the session cookie along with the request */
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(user => {
        this.props.onUserLoggedIn({ user })
      })
  }

  render() {
    return (
      <div className="Login">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <h2>Login</h2>
          <p>Username <input type="text" name="username" value={this.state.username} required/></p>
          <p>Password <input type="text" name="password" value={this.state.password} required /></p>
          <p><input type="submit" value="submit" /></p>
        </form>
      </div>
    );
  }
}

export default Login;
