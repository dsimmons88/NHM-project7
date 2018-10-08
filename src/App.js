import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SquareAPI from './API'

class App extends Component {
    componentDidMount(){
      SquareAPI.search({
        near:"Raleigh,NC",
        radius: 25,
        query: "Brewery",
        categoryId: "50327c8591d4c4b30a586d5d",
        limit: 25
      }).then(results => console.log(results));
    }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
