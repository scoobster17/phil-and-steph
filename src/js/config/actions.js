/**
 * Get details for all people
 * @return {Object} Action object for use in reducers to update state
 */
export function getPeople(success = () => {}, error = () => {}) {
    return {
        type: 'GET_PEOPLE',
        success,
        error
    }
}

/**
 * Update details for all people
 * @return {Object} Action object for use in reducers to update state
 */
export function updatePeople(response) {
    return {
        type: 'UPDATE_PEOPLE',
        response
    }
}

/**
 * Get social links for people specified
 * @return {Object} Action object for use in reducers to update state
 */
export function getSocialLinks(people) {
    return {
        type: 'GET_SOCIAL_LINKS',
        people
    }
}