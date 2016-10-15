/**
 * Reducer function for people part of app state
 * @param  {Array}  state  Array containing list of peopple
 * @param  {Object} action Action object containing information about the state change
 * @return {Array}         Array containing updated state of people list
 */
function people(state = [], action) {
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

export default people;