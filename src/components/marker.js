import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import App from '.././App'
import SquareAPI from '.././API/index'
import 'mapbox-gl/dist/mapbox-gl.css';

class Marker extends Component {
  constructor () {
    super();
    this.state = {
      venues: [],
      markers: [],
      zoom: 11


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

          coord: [venue.location.lng, venue.location.lat],
          togglePopup: false,
          getPopup: true

        };
        });
        this.setState({ venues, markers});
        console.log(markers);
      console.log(results);
    });

    }


    var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.032, 38.913]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.414, 37.776]
    },
    properties: {
      title: 'Mapbox',
      description: 'San Francisco, California'
    }
  }]
};

}

export default Marker;
