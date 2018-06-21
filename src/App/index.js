import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../HomePage';
import "./style.css";
import LoginPage from "../LoginPage";

class App extends Component {
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
          <Route path="/login" exact component = {LoginPage} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
