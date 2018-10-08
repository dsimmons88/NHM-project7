import React, { Component } from 'react';

import './App.css';
import SquareAPI from './API'
import Map from './components/Map'

class App extends Component {
    componentDidMount(){
      SquareAPI.search({
        ll:"35.780400,-78.639100",
        radius: "50000",
        query: "Brewery",
        
        limit: "10"
      }).then(resp => console.log(resp));
      SquareAPI.getVenueDetails("586ee5584f417a4e33001742").then(results => console.log(results));

    }


  render() {
    return (
      <div className="App">
      <header>
      <p>Neighorhood App</p>
      </header>
     <Map />
     <footer>This info was imported from the Foursquare and Mapbox API</footer>
      </div>
    );
  }
}

export default App;
