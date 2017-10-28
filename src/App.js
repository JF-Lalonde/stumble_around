import React, { Component } from 'react';
import './App.css';
import LocationForm from './components/InputForm';
import DistanceForm from './components/InputFromTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
      <LocationForm/>
      <DistanceForm/>
      </div>
    );
  }
}

export default App;
