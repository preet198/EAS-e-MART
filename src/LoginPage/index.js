import React, { Component } from "react";
import Login from "../Login";
import Register from "../Register";
import "./style.css";
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
    this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);
  }

  updateUserLoggedIn(user) {
    console.log(user);
    this.setState({
      userLoggedIn: true,
    });
  }

  render() {
    if (!this.state.userLoggedIn) {
      return (
        <div className="LoginPage">
          <h1>EAS-E-MART</h1>
          <Login onUserLoggedIn={this.updateUserLoggedIn} />
          <Register onUserLoggedIn={this.updateUserLoggedIn} />
        </div>
      );
    }
    return (
      <Redirect to="/items" />
    )
  };
};

export default LoginPage;
