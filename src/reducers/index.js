import { combineReducers } from 'redux';
import detailsReducer from './details';

const allReducers = combineReducers({
    detailsReducer,
})

export default allReducers;