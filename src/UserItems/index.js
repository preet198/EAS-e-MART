import React, { Component } from "react";
import { GoogleApiWrapper } from 'google-maps-react';
import Category from '../Category';
import Item from '../Item';
import MapContainer from "../MapContainer";
import "./style.css";
import LoginPage from "../LoginPage";

class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
  let id = this.state.items;
    console.log(id);
    fetch(`/user/items/${id}.json`)
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
          {this.state.items.map((item, i) => {
            console.log(item)
            return <Item
              key={i}
              id={item.id}
              img_url={item.img_url}
              name={item.name}
              price={item.price}
              description={item.description}
              condition={item.condition}
              quantity={item.quantity}
              category_id={item.category_id}
              user_name_id={item.user_name_id}
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
})(CategoryItem)
