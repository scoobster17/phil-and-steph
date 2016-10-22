// App dependencies
import $ from 'jquery';

/**
 * Reducer function for events part of app state
 * @param  {Array}  state  Array containing list of events
 * @param  {Object} action Action object containing information about the state change
 * @return {Array}         Array containing updated state of events list
 */
function events(state = [], action) {
    switch (action.type) {

         /**
         * Get details for all events
         * @return {Array} Updated state
         */
        case 'GET_EVENTS':

            $.ajax({
                url: '/data/events',
                success: action.success,
                error: action.error
            });

            return state;
            break;

        /**
         * Update details for all events
         * @return {Array} Updated state
         */
        case 'UPDATE_EVENTS':
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

export default events;