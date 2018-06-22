import React, { Component } from "react";
import Item from '../Item';
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
        {this.state.items.map(item => {
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
    );
  }
}

export default Items;
