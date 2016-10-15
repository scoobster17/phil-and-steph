/**
 * Reducer function for news part of app state
 * @param  {Array}  state  Array containing list of news pieces
 * @param  {Object} action Action object containing information about the state change
 * @return {Array}         Array containing updated state of news list
 */
function news(state = [], action) {
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

export default news;