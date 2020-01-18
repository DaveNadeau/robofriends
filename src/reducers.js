import {CHANGE_SEARCH_FIELD} from './constants.js' //imported for use

const initialState =  {       //initial state must always be set
  searchfield: ''
}

//note the setting to arguments,action is a blank object
export const searchRobots = (state=initialState, action{}) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, searchfield: action.payload)
      //optional refactor below using spread operator...
      //return {... state, searchfield: action.payload}
      default:
        return: state;
  }
}
