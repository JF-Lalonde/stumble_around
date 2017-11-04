import React, { Component } from 'react';

class PlaceList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const list = this.props.places.map((place) => 
        <div class="place">
      
      <h2>{place.name}</h2> 
      <h3>{place.vicinity}</h3>
      <h4>{place.rating}</h4>
      <a class="buttond" href= {`https://www.google.com/maps/dir/ + ${window.lat},${window.lng}/${place.vicinity}`}>Directions</a>
      </div>
      )
    return (
        <div class = "p-contain">
        {list}
        </div>
        );
  }
}



export default PlaceList;


