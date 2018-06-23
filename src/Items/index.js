import React, { Component } from "react";
import {GoogleApiWrapper} from 'google-maps-react';
import Item from '../Item';
import MapContainer from "../MapContainer";
import "./style.css";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/items.json')
      .then(response => response.json())
      .then(items => {
        this.setState({
          items: items
        });
      });
  }

  render() {
    return (
      <div className="Items">
        <div className="item-details">
          {this.state.items.map(item => {
            console.log(item)
            return <Item
              key={item.id}
              img_url={item.img_url}
              name={item.name}
              price={item.price}
              description={item.description}
              condition={item.condition}
              quantity={item.quantity}
            />
          })}
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
})(Items)
