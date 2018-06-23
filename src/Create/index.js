import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      condition: '',
      quantity: '',
      img_url: '',
      category_id: '',
      category: [],
      created: false
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/categories.json')
      .then(response => response.json())
      .then(category => {
        console.log(category);
          this.setState({
          category: category
        })
      })
  }


  onFormChange(evt) {
    const element = evt.target
    const name = element.name
    const value = element.value
    const newState = {}
    newState[name] = value
    this.setState(newState)

  }

  onFormSubmit(evt) {
    evt.preventDefault()
    const newItem = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      quantity: this.state.quantity,
      img_url: this.state.img_url,
      category: this.state.category,
      category_id: this.state.category_id
    }
    console.log('onFormSubmit:', newItem);

    fetch('/item/create.json', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(newItem => {
      console.log('fetch post:',newItem);
      this.setState({
        created: true
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Add Item</h1>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <select name="category_id">
            {this.state.category.map((category, index) => {
              return <option value={category.id}>{category.name}</option>
            })}
          </select>
          <input type='text' name='name' placeholder='name' value={this.state.name} />
          <input type='text' name='description' placeholder='description' value={this.state.description} />
          <input type='text' name='price' placeholder='price' value={this.state.price} />
          <input type='text' name='condition' placeholder='condition' value={this.state.condition} />
          <input type='text' name='quantity' placeholder='quantity' value={this.state.quantity} />
          <input type='text' name='img_url' placeholder='img url' value={this.state.img_url} />
          <button type='submit'>Create</button>
        </form>
      </div>
    );
  }
}

export default Create;