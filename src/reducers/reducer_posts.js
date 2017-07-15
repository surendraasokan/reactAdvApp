import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS :
      return _.mapKeys(action.payload.data, 'id');
    case DELETE_POST :
      return _.omit(state, action.payload);//now action.payload has deleted id.
      //_.omit() omits the deleted id and returns state
    case FETCH_POST :
      //Normal code
      // const post = action.payload.data;
      // const newState = { ...state }; //remove all the contents in the state and return new state
      // newState[post.id] = post;
      // return newState;

      return { ...state, [ action.payload.data.id ]: action.payload.data }; //New ES6 code

    default:
      return state;
  }
}
