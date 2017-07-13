/**
 * Created by sasokan on 7/9/2017.
 */
import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER :
            //return state.concat([action.payload.data]); // should not manipulate by state.push()
            return [action.payload.data, ...state]; // same as the above concat
    }
    return state;
}
