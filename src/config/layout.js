// React dependencies
import React from 'react';

// App dependencies
import GlobalHeader from '../components/global/global-header';
import GlobalFooter from '../components/global/global-footer';

/**
 * Render method for React component to render HTML utilising JSX
 * @return {JSX} Returns the JSX to be rendered by React into HMTL
 */
class Layout extends React.Component {
    render() {
        return (
            <div>
                <GlobalHeader />
                {
                    // page content
                    React.cloneElement(this.props.children, this.props)
                }
                <GlobalFooter />
            </div>
        )
    }
}

export default Layout;