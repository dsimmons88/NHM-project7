

import React, {Component} from 'react';
import ReactMapGL, {Popup, NavigationControl} from 'react-map-gl';
import App from '.././App'
import SquareAPI from '.././API/index'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";



const TOKEN = 'pk.eyJ1IjoiZHNpbW1vbnM4OCIsImEiOiJjamxvYmFlMnUxczE2M3BvMGJxcTBtMTY5In0.SG8UL0v6JyEsnEUPvPp2BA';



  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1Ijoic2t5bnVyYWsiLCJhIjoiY2pqdTZydW1rOGtxdTNwczJmdm5henRndiJ9.VKA1MVztPqrirg-ZKBQGsw"
  });

  class Maps extends Component {
    state = {
      viewport: {
        width: 800,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };

    render() {
      return (
        <Map
          style="mapbox://styles/mapbox/dark-v9"
          containerStyle={{
            height: "calc(100vh - 130px)",
            width: "50vw"
          }}
          center={[-0.139, 51.518]}
          zoom={[13]}
        >
          <Layer
            type="circle"
            id="marker"
            paint={{
              "circle-color": "#ff5200",
              "circle-stroke-width": 1,
              "circle-stroke-color": "#fff",
              "circle-stroke-opacity": 1
            }}
          >
            <Feature coordinates={[-0.132, 51.518]} />
            <Feature coordinates={[-0.142, 51.518]} />
          </Layer>
        </Map>
      );
    }
  }


/*


  state = {
    viewport: {
      latitude: 35.780400,
      longitude: -78.639100,
      zoom: 11,
      width: window.innerWidth,
      height:window.innerHeight,
      trackResize: true
    }

  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}
        >
        <Layer
          type="circle"
          id="marker"
          paint={{
            "circle-color": "#ff5200",
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff",
            "circle-stroke-opacity": 1
          }}
        >
          <Feature coordinates={[-0.132, 51.518]} />
          <Feature coordinates={[-0.132, 51.518]} />
        </Layer>
        </ReactMapGL>


    );
  }
}

*/



export default Maps;
