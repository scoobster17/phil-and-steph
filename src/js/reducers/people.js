// App dependencies
import $ from 'jquery';

/**
 * Reducer function for people part of app state
 * @param  {Array}  state  Array containing list of peopple
 * @param  {Object} action Action object containing information about the state change
 * @return {Array}         Array containing updated state of people list
 */
function people(state = [], action) {
    switch (action.type) {

        /**
         * Get details for all people
         * @return {Array} Updated state
         */
        case 'GET_PEOPLE':

            $.ajax({
                url: '/people',
                success: action.success,
                error: action.error
            });

            return state;
            break;

        /**
         * Update details for all people
         * @return {Array} Updated state
         */
        case 'UPDATE_PEOPLE':
            return action.response;
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