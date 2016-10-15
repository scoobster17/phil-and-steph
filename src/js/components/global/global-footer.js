// React dependencies
import React from 'react';

/**
 * Global footer component
 */
class GlobalFooter extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        return (
            <footer className="global-footer">
                &copy; Phil Gibbins
            </footer>
        )
    }
}

export default GlobalFooter;