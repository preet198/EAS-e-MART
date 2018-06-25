// Elyas claimed this page

import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Items extends Component {
  render() {
    return (
      <div className="Items">
        <div className="image-wrapper">
          <img src={this.props.img_url} />
        </div>
        <div className="Items-details">
          <h2><Link to={`/items/${this.props.id}`}>
          {console.log('item/index.js lising all item id:', this.props.id)}
          {this.props.name}</Link></h2>
          <p>Price: {this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default Items;
