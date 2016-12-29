// React dependencies
import React from 'react';

// App dependencies
import SocialLinksList from '../social-links/list';

/**
 * Global footer component
 */
class GlobalFooter extends React.Component {

    /**
     * Render method for React component to render HTML utilising JSX
     * @return {JSX} Returns the JSX to be rendered by React into HMTL
     */
    render() {

        const { people } = this.props;

        // separate bride and groom
        const brideAndGroom = people && people.filter((person) => {

            // must be involved in wedding
            if (!person.wedding) return false;

            return  person.wedding.role === 'bride' ||
                    person.wedding.role === 'groom';

        });

        return (
            <footer className="global-footer">
                {
                    brideAndGroom ?
                        brideAndGroom.map((person, index) => {
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

export default GlobalFooter;