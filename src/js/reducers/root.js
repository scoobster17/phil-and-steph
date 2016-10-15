// Redux dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import events from './events';
import news from './news';
import people from './people';

/**
 * Variable to cache redux reducer functions once combined
 * @type {Object}
 */
const rootReducer = combineReducers({
    events,
    news,
    people,
    routing: routerReducer
});

export default rootReducer;