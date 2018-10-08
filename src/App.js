import React, { Component } from 'react';

import './App.css';
import SquareAPI from './API'
import Map from './Map'

class App extends Component {
    componentDidMount(){
      SquareAPI.search({
        ll:"35.780400,-78.639100",
        radius: 25,
        query: "Brewery",
        categoryId: "50327c8591d4c4b30a586d5d",
        limit: 25
      }).then(results => console.log(results));
    }

  render() {
    return (
      <div className="App">
     <Map />
      </div>
    );
  }
}

export default App;
