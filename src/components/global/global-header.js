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
                            <Link to="/people">
                                <i className="icon-male"></i>
                                <i className="icon-female"></i>
                                People
                            </Link>
                        </li>
                        <li>
                            <Link to="/events">
                                <i className="icon-calendar"></i>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/media">
                                <i className="icon-camera"></i>
                                <i className="icon-video"></i>
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link to="/news">
                                <i className="icon-th-list"></i>
                                News
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

    componentDidMount() {

        // menu functionality
        const menu = document.querySelector('.globalNav');
        const toggle = document.querySelector('.menuLink');

        // temporary until class handling added (joose not jquery)
        toggle.addEventListener('click', () => {
            if (menu.style.display == 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        });
    }
}

export default GlobalHeader;