//A constant(s) file like this is used so that declared constants can be
//kept track of and also will throw an error if there is a spelling issue.
//these constants are imported to be used in the actions.js file

export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';


//3 states for async/ajax style calls, pending/success/failed
export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING'
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS'
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED'
