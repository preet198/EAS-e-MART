import React, { Component } from "react";
import "./style.css";
import Categories from "../Categories";

class HomePage extends Component {

  render() {
    return (
      <div className="HomePage">
        <h2>this is the HomePage</h2>
        <div className="container">
          <div className="grid">
            <h2>Categories</h2>
            <Categories />

          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
