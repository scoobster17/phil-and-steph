/**
 * Reducer function for events part of app state
 * @param  {Array}  state  Array containing list of events
 * @param  {Object} action Action object containing information about the state change
 * @return {Array}         Array containing updated state of events list
 */
function events(state = [], action) {
    switch (action.type) {

        /**
         * Test
         * @return {Array} Updated state
         */
        case 'TEST':
        	return state;
        	break;

        /**
         * Fallback to return existing state
         * @return {Array} Updated state
         */
        default:
        	return state;
        	break;
    }
}

export default events;