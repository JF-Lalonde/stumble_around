import $ from 'jquery';
import axios from 'axios';
import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import LocaButton from './LocationButton';
import PlaceList from './PlaceList';
/*global google*/


class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleType = this.handleType.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.handleKeyword = this.handleKeyword.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      typeText: '',
      priceText: '',
      distanceText: '',
      keyw: '',
      places: [],
    };

  }

  componentDidMount() {
  }


  handleType(event) {
    this.setState({typeText: event.target.value});
  }

  handleKeyword(event){
    this.setState({keyw: event.target.value});
  }

  handlePrice(event){
    this.setState({priceText: event.target.value});
  }

  handleDistance(event){
    this.setState({distanceText: event.target.value});
  }


  handleSave(event) {
    //add button for walk, bike or cr
    var type = (this.state.typeText)
    var distance = (this.state.distanceText)
    var price = (this.state.priceText)
    var keyword = (this.state.keyw)

    var map;
    var infowindow;

      var pyrmont = {lat: window.lat, lng: window.lng};

      map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: pyrmont,
        radius: distance,
        maxprice: price,
        type: [type],
        keyword: keyword
      }, callback.bind(this) )


    function callback(results, status) {
      this.setState({places: results})
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  }

  render() {
    return (
        <div>
        <h1>Stumble Around</h1>
        <LocaButton/>
        <form>
        <label>
        <input type="text" placeholder="Distance" class="f-input" value={this.state.distanceText} onChange={this.handleDistance} />
        </label>
        <label>
        <select class="price-t" value={this.state.priceText} onChange={this.handlePrice}>
        <option value="0">Price</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
        </select>
        </label>
        <label>
        <select class ="price-t" value={this.state.typeText} onChange={this.handleType}>
        <option value="0">Type</option>
        <option value="bar">Bar</option>
        <option value="restaurant">Restaurant</option>
        <option value="cafe">Cafe</option>
        </select>
        <label>
        <input type="text" placeholder="Keyword" class="f-input" value={this.state.keyw} onChange={this.handleKeyword} />
        </label>
        </label> 
        <button className="save" type="button" onClick=
        {this.handleSave}>Submit</button>
    </form>
      <div id="map"></div>
        <PlaceList places={this.state.places}/>
      </div>
      );
  }
}
export default SubmitForm;
