import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../HomePage';
import "./style.css";
import LoginPage from "../LoginPage";
import Create from "../Create";
import Items from "../Items";
import Item from "../Item";
import Categories from "../Categories";
import Category from "../Category";
import ItemsPage from "../ItemsPage";
import UpdateItem from "../UpdateItem";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <img src="https://farm2.staticflickr.com/1810/42939870751_33b6a555e2_b.jpg" className="logo" />
            <nav>
              <Link to="/">🏠</Link>
              <br></br>
              <Link to="/login">LogIn</Link>
              <br></br>
              <Link to="/items">All Items</Link>
            </nav>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/items" exact component={Items} />
            <Route path="/item/create" exact component={Create} />
            <Route path="/item/update/:id" exact component={UpdateItem} />
            <Route path="/items/:id" exact component={ItemsPage} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
