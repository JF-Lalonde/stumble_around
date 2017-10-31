import React, { Component } from 'react';
import $ from 'jquery'; 
import axios from 'axios';

class LocaButton extends Component {
  constructor(props) {
    super(props);
  }

componentDidMount() {
function getLocation(){
  var msg; 

  if('geolocation' in navigator){

    requestLocation();
  }else{

    msg = "Sorry, looks like your browser doesn't support geolocation";
    outputResult(msg); 
    $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-success');  
  }
  function requestLocation(){
    var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success, error, options); 
    function success(pos){

      window.lng = pos.coords.longitude;
      window.lat = pos.coords.latitude;
    }
    function error(err){

      msg = 'Error: ' + err + ' :(';
          outputResult(msg); 
          $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-error'); 
          }  
          } 
          function outputResult(msg){
            $('.result').addClass('result').html(msg);
          }
          } 
          $('.pure-button').on('click', function(){

            $('.result').html('<i class="fa fa-spinner fa-spin"></i>');
            getLocation();
          });
            }

  render() {
    return (
        <div>
      <button className="pure-button pure-button-primary">Get my location</button>
      <div className="result"></div>
      </div>
      );
  }
}


export default LocaButton;

