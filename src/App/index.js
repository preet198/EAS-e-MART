import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../HomePage';
import "./style.css";
import Homepage from "../Homepage";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
    this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);
  }

  updateUserLoggedIn(user) {
    this.setState({
      userLoggedIn: true,
      userId: user.id
    });
  }

  render() {

    return (
      <Router>
      <div>
      <div className="App">
        <img src="https://farm2.staticflickr.com/1810/42939870751_33b6a555e2_b.jpg" className="logo"/>
        <nav>
          <Link to="/">Home Page</Link>
          <br></br>
          <Link to="/login">LogIn *register in logIn modal</Link>
        </nav>
          <Route path="/" exact component = {HomePage} />
        </div>
      </div>

    if (!this.state.userLoggedIn) {
      return (
        <div className="App">
          <h1>EAS-E-MART</h1>
          <Login onUserLoggedIn={this.updateUserLoggedIn} />
          <Register onUserLoggedIn={this.updateUserLoggedIn} />
        </div>
      );
    }
    return (
      <Router>
        <div className="App">
          <h1>EAS-E-MART</h1>
          <Route path="/" component={Homepage} />
        </div>

      </Router>
    );
  }
}

export default App;
