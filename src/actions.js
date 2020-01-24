import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED} from './constants.js' //imported for use


//ACTIONS ARE JUST OBJECTS
export const setSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text
})

//takes "dispatch" from mapDispatchToProps function
//NOTE: the = () => (dispatch) => is due to redux-thunk middleware,
//it is used to act upon actions that return functions
export const requestRobots = () => (dispatch) => {
  dispatch({type:REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
}
