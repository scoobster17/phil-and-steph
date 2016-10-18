// App dependencies
import $ from 'jquery';

/**
 * Reducer function for news part of app state
 * @param  {Array}  state  Array containing list of news pieces
 * @param  {Object} action Action object containing information about the state change
 * @return {Array}         Array containing updated state of news list
 */
function news(state = [], action) {
    switch (action.type) {

         /**
         * Get details for all news
         * @return {Array} Updated state
         */
        case 'GET_NEWS':

            $.ajax({
                url: '/data/news',
                success: action.success,
                error: action.error
            });

            return state;
            break;

        /**
         * Update details for all news
         * @return {Array} Updated state
         */
        case 'UPDATE_NEWS':
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

export default news;