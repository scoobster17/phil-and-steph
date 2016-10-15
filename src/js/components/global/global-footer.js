// React dependencies
import React from 'react';

// Redux dependencies
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../config/mapping.js';

// App dependencies
import SocialLinksList from '../social-links/list';

/**
 * Global footer component
 */
class GlobalFooter extends React.Component {

    /**
     * Fetch people details (contains social links) on component load
     */
    componentWillMount() {
        this.props.getPeople(
            this.props.updatePeople
            // this.props.getPeopleError
        );
    }

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        const { people } = this.props;

        return (
            <footer className="global-footer">
                {
                    people ?
                        people.map((person, index) => {
                            return <SocialLinksList person={person} key={index} />
                        })
                    :
                        ''
                }
                <section className="siteDetails">
                    <p>
                        &copy; Copyright Phil Gibbins of&nbsp;
                        <a href="/" className="textLink">
                            PhilAndSteph.co.uk
                        </a>
                        &nbsp;&amp;&nbsp;
                        <a href="http://philgibbins.com" className="textLink" rel="external" target="_blank">
                            PhilGibbins.com
                            <i className="icon-link-ext"></i>
                        </a>
                    </p>
                </section>
            </footer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFooter);