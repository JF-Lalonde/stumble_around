import React, { Component } from 'react';

class TypeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'bar'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
        Type:
        <select value={this.state.value} onChange={this.handleChange}>
        <option value="type">Type</option>
        <option value="bar">Bar</option>
        <option value="restaurant">Restaurant</option>
        <option value="cafe">Cafe</option>
        </select>
        </label>
        <input type="submit" value="Submit" />
        </form>
        );
  }
}
export default TypeForm;

