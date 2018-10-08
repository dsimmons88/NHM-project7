import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import infoPop from './infoPop';
import App from '.././App'
const TOKEN = 'pk.eyJ1IjoiZHNpbW1vbnM4OCIsImEiOiJjamxvYmFlMnUxczE2M3BvMGJxcTBtMTY5In0.SG8UL0v6JyEsnEUPvPp2BA';
const navStyle = {

  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
constructor(props) {
    super(props);
   this.state = {
      viewport: {
        latitude: 35.780400,
        longitude: -78.639100,
        zoom: 11,
        width: window.innerWidth,
        height:window.innerHeight,
      }
    };
  }
render() {
    const {viewport} = this.state;
return (
      <div >
      <ReactMapGL
        {...viewport}{...this.props}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav"  style={navStyle}>
        <Marker latitude={this.props.markers.lat} longitude={this.props.markers.lng} offsetLeft={-20} offsetTop={-10}>
        <div>You are here</div>
      </Marker>
          <NavigationControl/>

        </div>
      </ReactMapGL>
      </div>
    );
  }
}



/*
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
*/
