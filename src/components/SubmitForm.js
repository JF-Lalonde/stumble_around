import React, { Component } from 'react';

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleType = this.handleType.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      typeText: '',
      priceText: '',
      distanceText: '',
      locationText: '',
    };
  
}

handleType(event) {
  this.setState({typeText: event.target.value});
}

handlePrice(event){
  this.setState({priceText: event.target.value});
}

handleDistance(event){
  this.setState({distanceText: event.target.value});
}

handleLocation(event){
  this.setState({locationText: event.target.value});
}

handleSave(event) {
  console.log(this.state.typeText)
  console.log(this.state.distanceText)
  console.log(this.state.priceText)
  console.log(this.state.locationText)
}

render() {
  return (
      <div>
      <form>
      <label>
      Location:
      <input type="text" value={this.state.locationText} onChange={this.handleLocation} />
      </label>
      <label>
      Distance:
      <input type="text" value={this.state.distanceText} onChange={this.handleDistance} />
      </label>
      <label>
      Price:
      <select value={this.state.priceText} onChange={this.handlePrice}>
      <option value="0">Price</option>
      <option value="1">$</option>
      <option value="2">$$</option>
      <option value="3">$$$</option>
      <option value="4">$$$$</option>
      </select>
      </label>
      <label>
      Type:
      <select value={this.state.typeText} onChange={this.handleType}>
      <option value="0">Type</option>
      <option value="bar">Bar</option>
      <option value="restaurant">Restaurant</option>
      <option value="cafe">Cafe</option>
      </select>
      </label>
      <button className="save" type="button" onClick=
      {this.handleSave}>Save</button>
      </form>
      </div>
      );
      }
}
export default SubmitForm;

