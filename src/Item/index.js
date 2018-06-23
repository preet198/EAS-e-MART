// Elyas claimed this page

import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Items extends Component {
  render() {
    return (
      <div className="Items">
        <div className="image-wrapper">
        {/* image of the item link to item page*/}
        <Link to={`/items/${this.props.id}`}>
          <img src={this.props.img_url} /></Link>
        </div>
        <div className="Items-details">
        {/* item name link to single item page */}
          <h3><Link to={`/items/${this.props.id}`}>
          {console.log(this.props.id)}
          {this.props.name}</Link></h3>
          {/* price of the item */}
          <p>Price: {this.props.price}</p>
        </div>
      </div>

    );
  }
}

export default Items;
