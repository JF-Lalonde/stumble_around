import $ from 'jquery'; 
import axios from 'axios';
import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import LocaButton from './LocationButton';

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

componentDidMount() {
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
  var type = (this.state.typeText)
    var distance = (this.state.distanceText)
    var price = (this.state.priceText)
    var locat = (this.state.locationText)
  debugger;
}
//store_json = @conn.get("maps/api/place/nearbysearch/json?location=#{lat},#{lon}&radius=#{radius}&type=bar&maxprice=#{price}&key=#{ENV['API_KEY']}")

render() {
  return (
      <div>
      <LocaButton/>
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

