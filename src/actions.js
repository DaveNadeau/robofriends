import {CHANGE_SEARCH_FIELD} from './constants.js' //imported for use


//ACTIONS ARE JUST OBJECTS
export const setSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text
})
