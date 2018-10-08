import React, { Component } from 'react';

import './App.css';
import SquareAPI from './API'
import Map from './components/Map'

class App extends Component {

  constructor () {
    super();
    this.state = {
      venues: [],
      markers: []


    };

  }


    componentDidMount(){




      SquareAPI.search({
        ll:"35.780400,-78.639100",
        radius: "50000",
        query: "Brewery",

        limit: "10"
      }).then(results => {

        const {venues} = results.response;

        const markers = venues.map(venue => {
          return {

          lng: venue.location.lng,
          lat: venue.location.lat,
          togglePopup: false,
          getPopup: true

        };
        });
        this.setState({ venues, markers});
        console.log(markers);
      console.log(results);
    });

    }


  render() {
    return (
      <div className="App">
      <header>
      <p>Neighorhood App</p>
      </header>
     <Map  {...this.state} />
     <footer>This info was imported from the Foursquare and Mapbox API</footer>
      </div>
    );
  }
}

export default App;
