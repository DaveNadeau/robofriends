import React, {Component} from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import {setSearchField, requestRobots} from './actions';
import {connect} from 'react-redux';

//see the export default code at the bottom for the Below
//this listens for state and sends out as a prop
//recall state start as constants, are used in actions, and are seens as
//initialState(s) in the reducers file
const mapStateToProps = state => {
  return{
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
//this listens for props that are actions and dispatches them
const mapDispatchToProps = (dispatch) => {
  return {
    OnSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  constructor() {
    super(); //used to avoid error using "this" - try without to see error
    this.state = {
      //App component has 2 states: robots and searchfield
      robots: [],  //'robots' is now a state in the App constructor, see "render" function, CardList, though
      // searchfield: ''
    }
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

//OnSearchChange is passed to SearchBox below as a prop
//Once connect() is used, this function is no longer needed
  // OnSearchChange = (event) => {
  //   //console.log(event.target.value);  //event.target.value updates with actual input in console
  //   this.setState({ searchfield: event.target.value }); //setState is a react library function used to update states
  // }

  render(){
    const {searchfield, OnSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //Note that robots (a state of App) is passed as a prop here to CardList below
    if(isPending){
      return <h1>loading...</h1>;
    } else {
      return (
        <div className = 'tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={OnSearchChange}/>
          <Scroll>
            <CardList robots = {filteredRobots} />
          </Scroll>
        </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order function that runs connect which takes it's arguments (the 'map's)
//and plugs them into the App function
