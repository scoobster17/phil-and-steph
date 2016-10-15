// React dependencies
import React from 'react';

// Redux dependencies
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../config/mapping.js';

// App dependencies
import GlobalHeader from './global-header';
import GlobalFooter from './global-footer';

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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);