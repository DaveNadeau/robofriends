import React, {Component} from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super(); //used to avoid error using "this" - try without to see error
    this.state = {
      //App component has 2 states: robots and searchfield
      robots: [],  //'robots' is now a state in the App constructor, see "render" function, CardList, though
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users=> this.setState({robots: users}));
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
    //Note that robots (a state of App) is passed as a prop here to CardList below
    if(this.state.robots.length === 0){
      return <h1>loading...</h1>;
    } else {
      return (
        <div className = 'tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.OnSearchChange}/>
          <Scroll>
            <CardList robots = {filteredRobots} />
          </Scroll>
        </div>
      )
    }
  }
}


export default App;
