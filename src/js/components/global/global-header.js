// React dependencies
import React from 'react';
import { Link } from 'react-router';

// temp for toggle class until joose-utils es2015-ified
import $ from 'jquery';

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
                            <Link>
                                Menu
                                <i className="icon-menu"></i>
                            </Link>
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

        var pas = window.pas || {};
        pas.global = (function () {

            var elems = {};
            var config = {
                showMenuClass: 'showMenu'
            };

            var bindElems = function() {
                elems.menuLink = document.querySelector('.menuLink');
                elems.navList = document.querySelector('nav .globalNav');
            };

            var bindEvents = function () {
                elems.menuLink.addEventListener('click', showHideNav);
            };

            var showHideNav = function() {
                // jquery used temporarily
                $(elems.navList).toggleClass(config.showMenuClass);
            };

            var init = function () {
                bindElems();
                bindEvents();
            };

            return {
                init: init
            };
        })();
        pas.global.init();
    }
}

export default GlobalHeader;