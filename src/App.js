import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import LocationForm from './components/InputForm';
//import DistanceForm from './components/InputFromTwo';
//import PriceForm from './components/SelectTag'; 
//import TypeForm from './components/SelectTagTwo';
import SubmitForm from './components/SubmitForm';

class App extends Component {
  componentWillMount() {
axios.get("https://safe-crag-41140.herokuapp.com/api/v1/key", {crossdomain: true})
.then((response) => {
  window.apKey = response.data
})
  }
  render() {
    return (
      <div className="App">
      
      <SubmitForm/>
      </div>
    );
  }
}

export default App;
