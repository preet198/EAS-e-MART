import React, { Component } from "react";
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
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    fetch(`/items/${id}.json`)
      .then(response => response.json())
      .then(item => {
        this.setState({
          user_name_id: item.user_name_id,
          category_id: item.category_id,
          name: item.name,
          description: item.description,
          price: item.price,
          condition: item.condition,
          quantity: item.quantity,
          img_url: item.img_url
        });
      });
  }

  render() {
    return (
      <div className="ItemsPage">
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
        <p>Listed By: {this.state.user_name_id}</p>
        <p>Category: {this.state.category_id}</p>
      </div>
    );
  }
}

export default ItemsPage;
