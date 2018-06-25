import React, { Component } from "react";
import MapContainer from "../MapContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {GoogleApiWrapper} from 'google-maps-react';

import Item from '../Item';
import "./style.css";

class ItemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      user_name_id: "",
      category_id: "",
      name: "",
      description: "",
      price: "",
      condition: "",
      quantity: "",
      img_url: "",
      userEmail: "",
      userPhone: "",
      userLongitude: "",
      userLatitude: ""
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    fetch(`/items/${id}.json`)
      .then(response => response.json())
      .then(item => {
        console.log(item);
        this.setState({
          user_name_id: item.user.username,
          category_id: item.category.name,
          name: item.item.name,
          description: item.item.description,
          price: item.item.price,
          condition: item.item.condition,
          quantity: item.item.quantity,
          img_url: item.item.img_url,
          userEmail: item.user.email,
          userPhone: item.user.phone_number,
          userLongitude: item.user.longitude,
          userLatitude: item.user.latitude,
        });
      });
  }

  render() {
    return (
      <div className="ItemsPage">
      <div className="Item">
        <Item
          user_name_id={this.state.user_name_id}
          category_id={this.state.category_id}
          name={this.state.name}
          description={this.state.description}
          price={this.state.price}
          condition={this.state.condition}
          quantity={this.state.quantity}
          img_url={this.state.img_url}
        />
        <p>Description: {this.state.description}</p>
        <p>Condition: {this.state.condition}</p>
        <p>Quantity: {this.state.quantity}</p>
        <p><img src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/128/User-blue-icon.png" class="icon"/>: {this.state.user_name_id}</p>
        <p><img src="http://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/256/Mail-icon.png" class="icon"/>: {this.state.userEmail}</p>
        <p><img src="http://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/128/Phone-icon.png" class="icon"/>: {this.state.userPhone}</p>
        <p><img src="http://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/128/Maps-icon.png" class="icon"/>: {this.state.userLongitude}, {this.state.userLatitude}</p>
        {/* <p>Category: {this.state.category_id}</p> */}

        <Link to="/item/update/${id}">Update</Link>

        </div>

        <div className="item-map">
          <MapContainer google={this.props.google} />
        </div>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCeTdCRweKINV2rVaMeM8LSSFMewLhUAXI')
})(ItemsPage)
