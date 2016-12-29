// React dependencies
import React from 'react';
import { Link } from 'react-router';

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
            <header className="global-header">
                <nav>
                    <ul>
                        <li className="homeLink">
                            <Link to="/">
                                PhilAndSteph.co.uk
                            </Link>
                        </li>
                        <li className="menuLink">
                            <button>
                                Menu
                                <i className="icon-menu"></i>
                            </button>
                        </li>
                    </ul>
                    <ul className="globalNav">
                        <li>
                            <Link to="/">
                                <i className="icon-home"></i>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <i className="icon-phone"></i>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default GlobalHeader;