// React dependencies
import React from 'react';

/**
 * Global header component
 */
class GlobalHeader extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        return (
            <header className="GlobalHeader">
                PhilAndSteph.co.uk
            </header>
        )
    }
}

export default GlobalHeader;