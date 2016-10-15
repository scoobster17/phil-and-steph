// Redux dependencies
import { bindActionCreators } from 'redux';

// Redux action creators
import * as actionCreators from './actions';

/**
 * Map the state to the react props
 * @param  {Object} state The state object controlled by Redux
 * @return {Object}       Object representing the state for use in props
 */
export function mapStateToProps(state) {
    return {
        events: state.events,
        news: state.news,
        people: state.people
    };
}

/**
 * Map the dispatch method and action creators to the react props
 * @param  {Function} dispatch The redux dispatch method
 * @return {Object}            An object with values that are action creators
 */
export function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}