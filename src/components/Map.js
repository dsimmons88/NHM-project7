



import Pin from './beerPin';
import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
const TOKEN = 'pk.eyJ1IjoiZHNpbW1vbnM4OCIsImEiOiJjamxvYmFlMnUxczE2M3BvMGJxcTBtMTY5In0.SG8UL0v6JyEsnEUPvPp2BA';





class Mapz extends Component {


constructor (props) {
  super(props);
  this.state = {
      viewport: {
        latitude: 35.780400,
        longitude: -78.639100,
        zoom:this.props.zoom,
        width: window.innerWidth,
        height:window.innerHeight,
        trackResize: true
      },

    };

  };





    render() {
      return (
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={TOKEN}

          > {this.props.markers.map( (marker) => (
            <Marker key={marker.lat} latitude={marker.lat}
            longitude={marker.lng} offsetLeft={0} offsetTop={0}>
            <Pin  />

              <Popup  latitude={marker.lat}
              longitude={marker.lng} offsetLeft={-650} offsetTop={-180} closeButton={true}
              closeOnClick={false} dynamicPosition={true} anchor="top">

            <div>"12"</div>
            </Popup>

          </Marker>
          ))}

          </ReactMapGL>


      );
    }
  }
export default Mapz;
