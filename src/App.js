import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super(); //used to avoid error using "this" try without to see error
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  render(){
    return (
      <div className = 'tc'>
        <h1>Robofriends</h1>
        <SearchBox />
        <CardList robots = {this.state.robots} />
      </div>
    )
  }
}


export default App;
