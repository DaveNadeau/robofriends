import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers.js'

//the root reducer (rootReducer) is the combination of all of the reducer functions in the
//reducer.js file and is used when there is more than one reducer in the file (almost always the case)
const store = createStore(searchRobots)
//store is used to store the various possible states of an application and
//can be passed to the DOM (ReactDOM) AS A PROP.


//Provider wraps the app so that store can be passed
ReactDOM.render(
  <Provider store = {store}>
    <App/>)
  </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
