import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
const TOKEN = 'pk.eyJ1IjoiZHNpbW1vbnM4OCIsImEiOiJjamxvYmFlMnUxczE2M3BvMGJxcTBtMTY5In0.SG8UL0v6JyEsnEUPvPp2BA';
const navStyle = {

  position: 'fixed',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
constructor(props) {
    super(props);
  /*  this.state = {
      viewport: {
        latitude: 35.780400,
        longitude: -78.639100,
        zoom: 11,
        bearing: 0,
        pitch: 0,
        width: window.innerWidth,
        height:window.innerHeight,
      }
    };
  }
render() {
    const {viewport} = this.state;
return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav"  style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}

*/


this.state = {
    viewport: {
      latitude: 35.780400,
      longitude: -78.639100,

      zoom: 11,
      bearing: 0,
      pitch: 0,
      width: window.innerWidth,
      height:window.innerHeight,
      trackResize: true
    }
  };
}

  render() {
    const {viewport} = this.state;
    return (
      <MapGL
        {...this.state.viewport}

        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}
      />
    );
  }
}
