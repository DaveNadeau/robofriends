import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super(); //used to avoid error using "this" - try without to see error
    this.state = {
      //App component has 2 states: robots and searchfield
      robots: robots,  //'robots' is now a state in the App constructor, see "render" function, CardList, though
      searchfield: ''
    }
  }

//OnSearchChange is passed to SearchBox below as a prop
  OnSearchChange = (event) => {
    //console.log(event.target.value);  //event.target.value updates with actual input in console
    this.setState({ searchfield: event.target.value }); //setState is a react library function used to update states
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    //Note that robots (a state of App) is passed as a prop here to CardList
    return (
      <div className = 'tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.OnSearchChange}/>
        <CardList robots = {filteredRobots} />
      </div>
    )
  }
}


export default App;
