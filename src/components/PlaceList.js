import React, { Component } from 'react';

class PlaceList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const list = this.props.places.map((place) => 
        <div class="place">
      <h2>{place.name}</h2> 
      <h5>{place.rating}</h5>
      </div>
      )
    return (
        <div>
        {list}
        </div>
        );
  }
}


export default PlaceList;


