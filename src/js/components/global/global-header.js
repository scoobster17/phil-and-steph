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
            <header className="global-header">
                <nav>
                    <ul>
                        <li className="homeLink">
                            <a href="/">PhilAndSteph.co.uk</a>
                        </li>
                        <li className="menuLink">
                            <a>
                                Menu
                                <i className="icon-menu"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="globalNav">
                        <li>
                            <a href="/">
                                <i className="icon-home"></i>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-male"></i>
                                <i className="icon-female"></i>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-heart"></i>
                                The Wedding
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default GlobalHeader;