import React, { Component } from 'react';



import './App.css';
import SquareAPI from './API'
import Mapz from './components/Map'
import mapboxgl from 'mapbox-gl'


import 'mapbox-gl/dist/mapbox-gl.css';




class App extends React.Component {

  constructor () {
    super();
    this.state = {
      venues: [],
      markers: [],

      zoom: 9.5


    };

  }


    componentDidMount(){




      SquareAPI.search({
        near:"Raleigh,NC",

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

     <Mapz  {...this.state}  />
     <footer>This info was imported from the Foursquare and Mapbox API</footer>
      </div>
    );
  }
}

export default App;
