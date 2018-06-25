import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <div className="image-wrapper">
        {/* image of the item link to item page*/}
        <Link to={`/items`}>
          <img src={this.props.img_url} /></Link>
        </div>
        <div className="Categories-details">
        {/* item name link to single item page */}
          <h3><Link to={`/items`}>
          {console.log(this.props.id)}
          {this.props.name}</Link></h3>
        </div>
      </div>

    );
  }
}

export default Categories;
