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

          <div className="Logo">
          <div>
            <img src="https://farm2.staticflickr.com/1840/42965301002_e0f8ef2eaa_b.jpg" className="logo" /></div>
            <div className="Login">
            <Link to="/login" className="login">LogIn</Link>
            </div>
          </div>

            <nav>
              <Link className="home" to="/">🏠</Link>
              <Link className="items" to="/items">All Items</Link>
              <Link className="create" to="/item/create">Create Item</Link>

            </nav>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/items" exact component={Items} />
            <Route path="/item/create" exact component={Create} />
            <Route path="/item/update/:id" exact component={UpdateItem} />
            <Route path="/items/:id" exact component={ItemsPage} />
          </div>
          <footer>
          <h4>2018 ©</h4>
          </footer>
        </div>
      </Router>
    );
  }
}


export default App;
