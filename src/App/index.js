import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../HomePage';
import "./style.css";
import LoginPage from "../LoginPage";
import Items from "../Items";
import ItemsPage from "../ItemsPage";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <img src="https://farm2.staticflickr.com/1810/42939870751_33b6a555e2_b.jpg" className="logo" />
            <nav>
              <Link to="/">Home Page</Link>
              <Link to="/login">LogIn *register in logIn modal</Link>
              <Link to="/items">All Items</Link>
            </nav>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/items" exact component={Items} />
            <Route path="/items/:id" exact component={ItemsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
